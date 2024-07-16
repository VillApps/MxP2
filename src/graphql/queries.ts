/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getViAUserEx = /* GraphQL */ `query GetViAUserEx($id: ID!) {
  getViAUserEx(id: $id) {
    id
    owner
    ViAGroup {
      items {
        id
        viAUserExId
        viAGroupId
        viAUserEx {
          id
          owner
          ViAGroup {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAUserExQueryVariables,
  APITypes.GetViAUserExQuery
>;
export const listViAUserExes = /* GraphQL */ `query ListViAUserExes(
  $filter: ModelViAUserExFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAUserExes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      ViAGroup {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAUserExesQueryVariables,
  APITypes.ListViAUserExesQuery
>;
export const getViAGroup = /* GraphQL */ `query GetViAGroup($id: ID!) {
  getViAGroup(id: $id) {
    id
    owner
    name
    ViAUserEx {
      items {
        id
        viAUserExId
        viAGroupId
        viAUserEx {
          id
          owner
          ViAGroup {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    ViAView {
      items {
        id
        viAGroupId
        viAViewId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAView {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAMenu {
      items {
        id
        viAGroupId
        viAMenuId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAMenuItem {
      items {
        id
        viAGroupId
        viAMenuItemId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenuItem {
          id
          owner
          name
          url
          orden
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          component
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAGroupQueryVariables,
  APITypes.GetViAGroupQuery
>;
export const listViAGroups = /* GraphQL */ `query ListViAGroups(
  $filter: ModelViAGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      name
      ViAUserEx {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAGroupsQueryVariables,
  APITypes.ListViAGroupsQuery
>;
export const getViAView = /* GraphQL */ `query GetViAView($id: ID!) {
  getViAView(id: $id) {
    id
    owner
    name
    ViAGroup {
      items {
        id
        viAGroupId
        viAViewId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAView {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAMenu {
      items {
        id
        viAViewId
        viAMenuId
        viAView {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAViewQueryVariables,
  APITypes.GetViAViewQuery
>;
export const listViAViews = /* GraphQL */ `query ListViAViews(
  $filter: ModelViAViewFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAViewsQueryVariables,
  APITypes.ListViAViewsQuery
>;
export const getViAMenu = /* GraphQL */ `query GetViAMenu($id: ID!) {
  getViAMenu(id: $id) {
    id
    owner
    name
    ViAGroup {
      items {
        id
        viAGroupId
        viAMenuId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAView {
      items {
        id
        viAViewId
        viAMenuId
        viAView {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAMenuItem {
      items {
        id
        viAMenuId
        viAMenuItemId
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenuItem {
          id
          owner
          name
          url
          orden
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          component
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAMenuQueryVariables,
  APITypes.GetViAMenuQuery
>;
export const listViAMenus = /* GraphQL */ `query ListViAMenus(
  $filter: ModelViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAMenusQueryVariables,
  APITypes.ListViAMenusQuery
>;
export const getViAMenuItem = /* GraphQL */ `query GetViAMenuItem($id: ID!) {
  getViAMenuItem(id: $id) {
    id
    owner
    name
    url
    orden
    ViAGroup {
      items {
        id
        viAGroupId
        viAMenuItemId
        viAGroup {
          id
          owner
          name
          ViAUserEx {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenuItem {
          id
          owner
          name
          url
          orden
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          component
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ViAMenu {
      items {
        id
        viAMenuId
        viAMenuItemId
        viAMenu {
          id
          owner
          name
          ViAGroup {
            nextToken
            __typename
          }
          ViAView {
            nextToken
            __typename
          }
          ViAMenuItem {
            nextToken
            __typename
          }
          updatedAt
          createdAt
          __typename
        }
        viAMenuItem {
          id
          owner
          name
          url
          orden
          ViAGroup {
            nextToken
            __typename
          }
          ViAMenu {
            nextToken
            __typename
          }
          component
          updatedAt
          createdAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    component
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAMenuItemQueryVariables,
  APITypes.GetViAMenuItemQuery
>;
export const listViAMenuItems = /* GraphQL */ `query ListViAMenuItems(
  $filter: ModelViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      name
      url
      orden
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      component
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAMenuItemsQueryVariables,
  APITypes.ListViAMenuItemsQuery
>;
export const getViAUserExViAGroup = /* GraphQL */ `query GetViAUserExViAGroup($id: ID!) {
  getViAUserExViAGroup(id: $id) {
    id
    viAUserExId
    viAGroupId
    viAUserEx {
      id
      owner
      ViAGroup {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAGroup {
      id
      owner
      name
      ViAUserEx {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAUserExViAGroupQueryVariables,
  APITypes.GetViAUserExViAGroupQuery
>;
export const listViAUserExViAGroups = /* GraphQL */ `query ListViAUserExViAGroups(
  $filter: ModelViAUserExViAGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAUserExViAGroups(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAUserExId
      viAGroupId
      viAUserEx {
        id
        owner
        ViAGroup {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAUserExViAGroupsQueryVariables,
  APITypes.ListViAUserExViAGroupsQuery
>;
export const getViAGroupViAView = /* GraphQL */ `query GetViAGroupViAView($id: ID!) {
  getViAGroupViAView(id: $id) {
    id
    viAGroupId
    viAViewId
    viAGroup {
      id
      owner
      name
      ViAUserEx {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAView {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAGroupViAViewQueryVariables,
  APITypes.GetViAGroupViAViewQuery
>;
export const listViAGroupViAViews = /* GraphQL */ `query ListViAGroupViAViews(
  $filter: ModelViAGroupViAViewFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAGroupViAViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      viAGroupId
      viAViewId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAGroupViAViewsQueryVariables,
  APITypes.ListViAGroupViAViewsQuery
>;
export const getViAGroupViAMenu = /* GraphQL */ `query GetViAGroupViAMenu($id: ID!) {
  getViAGroupViAMenu(id: $id) {
    id
    viAGroupId
    viAMenuId
    viAGroup {
      id
      owner
      name
      ViAUserEx {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAMenu {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAGroupViAMenuQueryVariables,
  APITypes.GetViAGroupViAMenuQuery
>;
export const listViAGroupViAMenus = /* GraphQL */ `query ListViAGroupViAMenus(
  $filter: ModelViAGroupViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAGroupViAMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      viAGroupId
      viAMenuId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAGroupViAMenusQueryVariables,
  APITypes.ListViAGroupViAMenusQuery
>;
export const getViAGroupViAMenuItem = /* GraphQL */ `query GetViAGroupViAMenuItem($id: ID!) {
  getViAGroupViAMenuItem(id: $id) {
    id
    viAGroupId
    viAMenuItemId
    viAGroup {
      id
      owner
      name
      ViAUserEx {
        items {
          id
          viAUserExId
          viAGroupId
          viAUserEx {
            id
            owner
            updatedAt
            createdAt
            __typename
          }
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAMenuItem {
      id
      owner
      name
      url
      orden
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      component
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAGroupViAMenuItemQueryVariables,
  APITypes.GetViAGroupViAMenuItemQuery
>;
export const listViAGroupViAMenuItems = /* GraphQL */ `query ListViAGroupViAMenuItems(
  $filter: ModelViAGroupViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAGroupViAMenuItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAMenuItemId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAGroupViAMenuItemsQueryVariables,
  APITypes.ListViAGroupViAMenuItemsQuery
>;
export const getViAViewViAMenu = /* GraphQL */ `query GetViAViewViAMenu($id: ID!) {
  getViAViewViAMenu(id: $id) {
    id
    viAViewId
    viAMenuId
    viAView {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAViewId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAMenu {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAViewViAMenuQueryVariables,
  APITypes.GetViAViewViAMenuQuery
>;
export const listViAViewViAMenus = /* GraphQL */ `query ListViAViewViAMenus(
  $filter: ModelViAViewViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAViewViAMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      viAViewId
      viAMenuId
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAViewViAMenusQueryVariables,
  APITypes.ListViAViewViAMenusQuery
>;
export const getViAMenuViAMenuItem = /* GraphQL */ `query GetViAMenuViAMenuItem($id: ID!) {
  getViAMenuViAMenuItem(id: $id) {
    id
    viAMenuId
    viAMenuItemId
    viAMenu {
      id
      owner
      name
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAView {
        items {
          id
          viAViewId
          viAMenuId
          viAView {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenuItem {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    viAMenuItem {
      id
      owner
      name
      url
      orden
      ViAGroup {
        items {
          id
          viAGroupId
          viAMenuItemId
          viAGroup {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ViAMenu {
        items {
          id
          viAMenuId
          viAMenuItemId
          viAMenu {
            id
            owner
            name
            updatedAt
            createdAt
            __typename
          }
          viAMenuItem {
            id
            owner
            name
            url
            orden
            component
            updatedAt
            createdAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      component
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViAMenuViAMenuItemQueryVariables,
  APITypes.GetViAMenuViAMenuItemQuery
>;
export const listViAMenuViAMenuItems = /* GraphQL */ `query ListViAMenuViAMenuItems(
  $filter: ModelViAMenuViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listViAMenuViAMenuItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAMenuId
      viAMenuItemId
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViAMenuViAMenuItemsQueryVariables,
  APITypes.ListViAMenuViAMenuItemsQuery
>;
export const viAUserExViAGroupsByViAUserExId = /* GraphQL */ `query ViAUserExViAGroupsByViAUserExId(
  $viAUserExId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAUserExViAGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  viAUserExViAGroupsByViAUserExId(
    viAUserExId: $viAUserExId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAUserExId
      viAGroupId
      viAUserEx {
        id
        owner
        ViAGroup {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAUserExViAGroupsByViAUserExIdQueryVariables,
  APITypes.ViAUserExViAGroupsByViAUserExIdQuery
>;
export const viAUserExViAGroupsByViAGroupId = /* GraphQL */ `query ViAUserExViAGroupsByViAGroupId(
  $viAGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAUserExViAGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  viAUserExViAGroupsByViAGroupId(
    viAGroupId: $viAGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAUserExId
      viAGroupId
      viAUserEx {
        id
        owner
        ViAGroup {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAUserExViAGroupsByViAGroupIdQueryVariables,
  APITypes.ViAUserExViAGroupsByViAGroupIdQuery
>;
export const viAGroupViAViewsByViAGroupId = /* GraphQL */ `query ViAGroupViAViewsByViAGroupId(
  $viAGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAViewFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAViewsByViAGroupId(
    viAGroupId: $viAGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAViewId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAViewsByViAGroupIdQueryVariables,
  APITypes.ViAGroupViAViewsByViAGroupIdQuery
>;
export const viAGroupViAViewsByViAViewId = /* GraphQL */ `query ViAGroupViAViewsByViAViewId(
  $viAViewId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAViewFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAViewsByViAViewId(
    viAViewId: $viAViewId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAViewId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAViewsByViAViewIdQueryVariables,
  APITypes.ViAGroupViAViewsByViAViewIdQuery
>;
export const viAGroupViAMenusByViAGroupId = /* GraphQL */ `query ViAGroupViAMenusByViAGroupId(
  $viAGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAMenusByViAGroupId(
    viAGroupId: $viAGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAMenuId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAMenusByViAGroupIdQueryVariables,
  APITypes.ViAGroupViAMenusByViAGroupIdQuery
>;
export const viAGroupViAMenusByViAMenuId = /* GraphQL */ `query ViAGroupViAMenusByViAMenuId(
  $viAMenuId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAMenusByViAMenuId(
    viAMenuId: $viAMenuId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAMenuId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAMenusByViAMenuIdQueryVariables,
  APITypes.ViAGroupViAMenusByViAMenuIdQuery
>;
export const viAGroupViAMenuItemsByViAGroupId = /* GraphQL */ `query ViAGroupViAMenuItemsByViAGroupId(
  $viAGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAMenuItemsByViAGroupId(
    viAGroupId: $viAGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAMenuItemId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAMenuItemsByViAGroupIdQueryVariables,
  APITypes.ViAGroupViAMenuItemsByViAGroupIdQuery
>;
export const viAGroupViAMenuItemsByViAMenuItemId = /* GraphQL */ `query ViAGroupViAMenuItemsByViAMenuItemId(
  $viAMenuItemId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAGroupViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  viAGroupViAMenuItemsByViAMenuItemId(
    viAMenuItemId: $viAMenuItemId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAGroupId
      viAMenuItemId
      viAGroup {
        id
        owner
        name
        ViAUserEx {
          items {
            id
            viAUserExId
            viAGroupId
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAGroupViAMenuItemsByViAMenuItemIdQueryVariables,
  APITypes.ViAGroupViAMenuItemsByViAMenuItemIdQuery
>;
export const viAViewViAMenusByViAViewId = /* GraphQL */ `query ViAViewViAMenusByViAViewId(
  $viAViewId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAViewViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  viAViewViAMenusByViAViewId(
    viAViewId: $viAViewId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAViewId
      viAMenuId
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAViewViAMenusByViAViewIdQueryVariables,
  APITypes.ViAViewViAMenusByViAViewIdQuery
>;
export const viAViewViAMenusByViAMenuId = /* GraphQL */ `query ViAViewViAMenusByViAMenuId(
  $viAMenuId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAViewViAMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  viAViewViAMenusByViAMenuId(
    viAMenuId: $viAMenuId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAViewId
      viAMenuId
      viAView {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAViewId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAViewViAMenusByViAMenuIdQueryVariables,
  APITypes.ViAViewViAMenusByViAMenuIdQuery
>;
export const viAMenuViAMenuItemsByViAMenuId = /* GraphQL */ `query ViAMenuViAMenuItemsByViAMenuId(
  $viAMenuId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAMenuViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  viAMenuViAMenuItemsByViAMenuId(
    viAMenuId: $viAMenuId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAMenuId
      viAMenuItemId
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAMenuViAMenuItemsByViAMenuIdQueryVariables,
  APITypes.ViAMenuViAMenuItemsByViAMenuIdQuery
>;
export const viAMenuViAMenuItemsByViAMenuItemId = /* GraphQL */ `query ViAMenuViAMenuItemsByViAMenuItemId(
  $viAMenuItemId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViAMenuViAMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  viAMenuViAMenuItemsByViAMenuItemId(
    viAMenuItemId: $viAMenuItemId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      viAMenuId
      viAMenuItemId
      viAMenu {
        id
        owner
        name
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAView {
          items {
            id
            viAViewId
            viAMenuId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenuItem {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        updatedAt
        createdAt
        __typename
      }
      viAMenuItem {
        id
        owner
        name
        url
        orden
        ViAGroup {
          items {
            id
            viAGroupId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        ViAMenu {
          items {
            id
            viAMenuId
            viAMenuItemId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        component
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViAMenuViAMenuItemsByViAMenuItemIdQueryVariables,
  APITypes.ViAMenuViAMenuItemsByViAMenuItemIdQuery
>;
