/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { createViAUserEx } from '../../graphql/mutations';
import qS from '../Utils/Queries';

interface Ui {
  loading: Boolean;
  testMode: Boolean;
  appLoading: Boolean;
  loadingPile: any[];
  ViAUserEx: {};
  navParams: {};
  isUtilsBar: {};
  breadCrumbs: [];
}

const initialState: Ui = {
  loading: false,
  testMode: false,
  appLoading: true,
  loadingPile: [],
  ViAUserEx: {},
  navParams: {},
  isUtilsBar: { show: false, model: null },
  breadCrumbs: [],
};

const client = generateClient();

const parseJsonProperties = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const jsonParser = (value: any) => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  };
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      // Check if the string looks like a JSON object
      obj[key] = jsonParser(value);
    } else if (typeof value === 'object') {
      obj[key] = parseJsonProperties(value);
    }
  }
  return obj;
};

export const initViAUserEx = createAsyncThunk('UserExt/initViAUserEx', async () => {
  try {
    const user: any = await fetchUserAttributes();
    let userExtDB: any = await client.graphql({
      query: qS.getInitViAUserEx,
      variables: { id: user.email },
    });
    if (!userExtDB.data.getViAUserEx) {
      userExtDB = await client.graphql({
        query: createViAUserEx,
        variables: {
          input: {
            id: user.email,
          },
        },
      });
      userExtDB = userExtDB.data.createViAUserEx;
    } else {
      userExtDB = userExtDB.data.getViAUserEx;
    }
    const menusItems: any = {};
    const groupPromises = userExtDB.ViAGroup.items.map(async (item: { viAGroup: any }) => {
      const group = item.viAGroup;
      const response: any = await client.graphql({
        query: qS.getMenusItemsGroups,
        variables: { viAGroupId: group.id },
      });
      menusItems[group.id] = response.data.listViAGroupViAMenuItems.items;
    });

    await Promise.all(groupPromises);

    const userExt: any = { id: userExtDB.id, groups: {} };
    for (let i = 0; i < userExtDB.ViAGroup.items.length; i++) {
      const group = userExtDB.ViAGroup.items[i].viAGroup;
      userExt.groups[group.id] = { ...group, ...{ views: {} } };
    }
    const menusItemsKeys = Object.keys(menusItems);
    for (let i = 0; i < menusItemsKeys.length; i++) {
      const groupId = menusItemsKeys[i];
      const menuItems = menusItems[groupId];
      for (let l = 0; l < menuItems.length; l++) {
        const menuItem = menuItems[l].viAMenuItem;
        for (let j = 0; j < menuItem.ViAMenu.items.length; j++) {
          const menu = menuItem.ViAMenu.items[j].viAMenu;
          for (let k = 0; k < menu.ViAView.items.length; k++) {
            const view = menu.ViAView.items[k].viAView;
            if (!userExt.groups[groupId].views[view.id]) {
              userExt.groups[groupId].views[view.id] = { name: view.name };
            }
            if (!userExt.groups[groupId].views[view.id].menus) {
              userExt.groups[groupId].views[view.id].menus = { [menu.id]: { name: menu.name } };
            }
            if (!userExt.groups[groupId].views[view.id].menus[menu.id].menusItems) {
              userExt.groups[groupId].views[view.id].menus[menu.id].menusItems = { [menuItem.id]: {} };
            }
            userExt.groups[groupId].views[view.id].menus[menu.id].menusItems[menuItem.id] = { name: menuItem.name, id: menuItem.id, url: menuItem.url, orden: menuItem.orden };
          }
        }
      }
    }
    console.log('UserExtSlice - initViAUserEx - userExt');
    console.log(userExt);
    return parseJsonProperties(userExt);
  } catch (error) {
    console.log('UserExtSlice - initViAUserEx - Error');
    console.log(error);
    return {};
  }
});

export const UiSlice = createSlice({
  name: 'Ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.loadingPile.unshift(action.payload); // Add to the beginning of the array
      } else {
        state.loadingPile.shift(); // Remove from the beginning of the array
      }
      state.loading = state.loadingPile.length > 0; // Set loading to true if loadingPile is not empty
    },
    setTestMode: (state: any, action: PayloadAction<boolean>) => {
      state.testMode = action.payload;
    },
    setAppLoading: (state: any, action: PayloadAction<boolean>) => {
      state.appLoading = action.payload;
    },
    setViAUserEx: (state: any, action) => {
      state.ViAUserEx = action.payload;
    },
    setNavParams: (state: any, action) => {
      state.navParams = action.payload;
    },
    setIsUtilsBar: (state: any, action) => {
      state.isUtilsBar = action.payload;
    },
    setBreadCrumbs: (state: any, action) => {
      state.breadCrumbs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initViAUserEx.fulfilled, (state: any, action: any) => {
      state.ViAUserEx = action.payload;
      return state;
    });
  },
});

export const { setLoading, setTestMode, setAppLoading, setViAUserEx, setNavParams, setIsUtilsBar, setBreadCrumbs } = UiSlice.actions;

export default UiSlice.reducer;
