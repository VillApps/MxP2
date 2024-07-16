/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */

import { generateClient } from 'aws-amplify/api';
import { setBreadCrumbs, setLoading } from '../States/UiSlice';

const client = generateClient();
/* eslint-disable no-restricted-syntax */
interface ASInterface {
  log: (text: string, obj: any) => void;
  parseJsonProperties: (obj: any) => any;
  formatAsCurrency: (value: any) => any;
  upsertModel: (dispatch: any, operation: any, obj: any) => any;
  breadCrumbsGoTo: (dispatch: any, navigate: any, breadCrumbs: any, link: string) => any;
  version: string;
}

function truncateArrayFromString(arr: any[], searchString: string) {
  const index = arr.findIndex((element: any) => element === searchString);
  if (index !== -1) {
    return arr.slice(0, index);
  }
  return arr; // Return the original array if the string is not found
}

const aS: ASInterface = {
  version: '1.0',
  log: (text: string, obj: any) => {
    console.log('-------------------------------------------');
    console.log(text);
    if (obj instanceof Error) {
      console.log(JSON.stringify(obj.message, null, 2));
    } else {
      console.log(JSON.stringify(obj, null, 2));
    }
    console.log('------------------------------------------');
  },
  parseJsonProperties: (obj: any) => {
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
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
          obj[key] = jsonParser(value);
        } else if (typeof value === 'object') {
          obj[key] = aS.parseJsonProperties(value);
        }
      }
    }
    return obj;
  },
  formatAsCurrency: (value: any) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(value);
  },
  upsertModel: async (dispatch: any, operation: any, obj: any) => {
    const objT = { ...obj };
    if (objT.id === '') {
      delete objT.id;
    }
    delete objT.owner;
    delete objT.updatedAt;
    delete objT.createdAt;
    delete objT.__typename;
    delete objT.ViAUserEx;
    delete objT.ViAView;
    delete objT.ViAGroup;
    delete objT.ViAMenu;
    delete objT.ViAMenuItem;
    try {
      dispatch(setLoading(true));
      const res = await client.graphql({
        query: operation,
        variables: { input: objT },
      });
      return res;
    } catch (error) {
      aS.log('APP - upsertModel - objT', objT);
      aS.log('APP - upsertModel - Error', error);
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  },
  breadCrumbsGoTo: (dispatch: any, navigate: any, breadCrumbs: any, link: string) => {
    dispatch(setBreadCrumbs(truncateArrayFromString([...breadCrumbs], link)));
    navigate(link);
  },
};
export default aS;
