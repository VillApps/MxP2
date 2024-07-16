/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateViAUserEx = /* GraphQL */ `subscription OnCreateViAUserEx(
  $filter: ModelSubscriptionViAUserExFilterInput
  $owner: String
) {
  onCreateViAUserEx(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAUserExSubscriptionVariables,
  APITypes.OnCreateViAUserExSubscription
>;
export const onUpdateViAUserEx = /* GraphQL */ `subscription OnUpdateViAUserEx(
  $filter: ModelSubscriptionViAUserExFilterInput
  $owner: String
) {
  onUpdateViAUserEx(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAUserExSubscriptionVariables,
  APITypes.OnUpdateViAUserExSubscription
>;
export const onDeleteViAUserEx = /* GraphQL */ `subscription OnDeleteViAUserEx(
  $filter: ModelSubscriptionViAUserExFilterInput
  $owner: String
) {
  onDeleteViAUserEx(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAUserExSubscriptionVariables,
  APITypes.OnDeleteViAUserExSubscription
>;
export const onCreateViAGroup = /* GraphQL */ `subscription OnCreateViAGroup($filter: ModelSubscriptionViAGroupFilterInput) {
  onCreateViAGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAGroupSubscriptionVariables,
  APITypes.OnCreateViAGroupSubscription
>;
export const onUpdateViAGroup = /* GraphQL */ `subscription OnUpdateViAGroup($filter: ModelSubscriptionViAGroupFilterInput) {
  onUpdateViAGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAGroupSubscriptionVariables,
  APITypes.OnUpdateViAGroupSubscription
>;
export const onDeleteViAGroup = /* GraphQL */ `subscription OnDeleteViAGroup($filter: ModelSubscriptionViAGroupFilterInput) {
  onDeleteViAGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAGroupSubscriptionVariables,
  APITypes.OnDeleteViAGroupSubscription
>;
export const onCreateViAView = /* GraphQL */ `subscription OnCreateViAView($filter: ModelSubscriptionViAViewFilterInput) {
  onCreateViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAViewSubscriptionVariables,
  APITypes.OnCreateViAViewSubscription
>;
export const onUpdateViAView = /* GraphQL */ `subscription OnUpdateViAView($filter: ModelSubscriptionViAViewFilterInput) {
  onUpdateViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAViewSubscriptionVariables,
  APITypes.OnUpdateViAViewSubscription
>;
export const onDeleteViAView = /* GraphQL */ `subscription OnDeleteViAView($filter: ModelSubscriptionViAViewFilterInput) {
  onDeleteViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAViewSubscriptionVariables,
  APITypes.OnDeleteViAViewSubscription
>;
export const onCreateViAMenu = /* GraphQL */ `subscription OnCreateViAMenu($filter: ModelSubscriptionViAMenuFilterInput) {
  onCreateViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAMenuSubscriptionVariables,
  APITypes.OnCreateViAMenuSubscription
>;
export const onUpdateViAMenu = /* GraphQL */ `subscription OnUpdateViAMenu($filter: ModelSubscriptionViAMenuFilterInput) {
  onUpdateViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAMenuSubscriptionVariables,
  APITypes.OnUpdateViAMenuSubscription
>;
export const onDeleteViAMenu = /* GraphQL */ `subscription OnDeleteViAMenu($filter: ModelSubscriptionViAMenuFilterInput) {
  onDeleteViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAMenuSubscriptionVariables,
  APITypes.OnDeleteViAMenuSubscription
>;
export const onCreateViAMenuItem = /* GraphQL */ `subscription OnCreateViAMenuItem(
  $filter: ModelSubscriptionViAMenuItemFilterInput
) {
  onCreateViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAMenuItemSubscriptionVariables,
  APITypes.OnCreateViAMenuItemSubscription
>;
export const onUpdateViAMenuItem = /* GraphQL */ `subscription OnUpdateViAMenuItem(
  $filter: ModelSubscriptionViAMenuItemFilterInput
) {
  onUpdateViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAMenuItemSubscriptionVariables,
  APITypes.OnUpdateViAMenuItemSubscription
>;
export const onDeleteViAMenuItem = /* GraphQL */ `subscription OnDeleteViAMenuItem(
  $filter: ModelSubscriptionViAMenuItemFilterInput
) {
  onDeleteViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAMenuItemSubscriptionVariables,
  APITypes.OnDeleteViAMenuItemSubscription
>;
export const onCreateViAUserExViAGroup = /* GraphQL */ `subscription OnCreateViAUserExViAGroup(
  $filter: ModelSubscriptionViAUserExViAGroupFilterInput
  $owner: String
) {
  onCreateViAUserExViAGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAUserExViAGroupSubscriptionVariables,
  APITypes.OnCreateViAUserExViAGroupSubscription
>;
export const onUpdateViAUserExViAGroup = /* GraphQL */ `subscription OnUpdateViAUserExViAGroup(
  $filter: ModelSubscriptionViAUserExViAGroupFilterInput
  $owner: String
) {
  onUpdateViAUserExViAGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAUserExViAGroupSubscriptionVariables,
  APITypes.OnUpdateViAUserExViAGroupSubscription
>;
export const onDeleteViAUserExViAGroup = /* GraphQL */ `subscription OnDeleteViAUserExViAGroup(
  $filter: ModelSubscriptionViAUserExViAGroupFilterInput
  $owner: String
) {
  onDeleteViAUserExViAGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAUserExViAGroupSubscriptionVariables,
  APITypes.OnDeleteViAUserExViAGroupSubscription
>;
export const onCreateViAGroupViAView = /* GraphQL */ `subscription OnCreateViAGroupViAView(
  $filter: ModelSubscriptionViAGroupViAViewFilterInput
) {
  onCreateViAGroupViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAGroupViAViewSubscriptionVariables,
  APITypes.OnCreateViAGroupViAViewSubscription
>;
export const onUpdateViAGroupViAView = /* GraphQL */ `subscription OnUpdateViAGroupViAView(
  $filter: ModelSubscriptionViAGroupViAViewFilterInput
) {
  onUpdateViAGroupViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAGroupViAViewSubscriptionVariables,
  APITypes.OnUpdateViAGroupViAViewSubscription
>;
export const onDeleteViAGroupViAView = /* GraphQL */ `subscription OnDeleteViAGroupViAView(
  $filter: ModelSubscriptionViAGroupViAViewFilterInput
) {
  onDeleteViAGroupViAView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAGroupViAViewSubscriptionVariables,
  APITypes.OnDeleteViAGroupViAViewSubscription
>;
export const onCreateViAGroupViAMenu = /* GraphQL */ `subscription OnCreateViAGroupViAMenu(
  $filter: ModelSubscriptionViAGroupViAMenuFilterInput
) {
  onCreateViAGroupViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAGroupViAMenuSubscriptionVariables,
  APITypes.OnCreateViAGroupViAMenuSubscription
>;
export const onUpdateViAGroupViAMenu = /* GraphQL */ `subscription OnUpdateViAGroupViAMenu(
  $filter: ModelSubscriptionViAGroupViAMenuFilterInput
) {
  onUpdateViAGroupViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAGroupViAMenuSubscriptionVariables,
  APITypes.OnUpdateViAGroupViAMenuSubscription
>;
export const onDeleteViAGroupViAMenu = /* GraphQL */ `subscription OnDeleteViAGroupViAMenu(
  $filter: ModelSubscriptionViAGroupViAMenuFilterInput
) {
  onDeleteViAGroupViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAGroupViAMenuSubscriptionVariables,
  APITypes.OnDeleteViAGroupViAMenuSubscription
>;
export const onCreateViAGroupViAMenuItem = /* GraphQL */ `subscription OnCreateViAGroupViAMenuItem(
  $filter: ModelSubscriptionViAGroupViAMenuItemFilterInput
) {
  onCreateViAGroupViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAGroupViAMenuItemSubscriptionVariables,
  APITypes.OnCreateViAGroupViAMenuItemSubscription
>;
export const onUpdateViAGroupViAMenuItem = /* GraphQL */ `subscription OnUpdateViAGroupViAMenuItem(
  $filter: ModelSubscriptionViAGroupViAMenuItemFilterInput
) {
  onUpdateViAGroupViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAGroupViAMenuItemSubscriptionVariables,
  APITypes.OnUpdateViAGroupViAMenuItemSubscription
>;
export const onDeleteViAGroupViAMenuItem = /* GraphQL */ `subscription OnDeleteViAGroupViAMenuItem(
  $filter: ModelSubscriptionViAGroupViAMenuItemFilterInput
) {
  onDeleteViAGroupViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAGroupViAMenuItemSubscriptionVariables,
  APITypes.OnDeleteViAGroupViAMenuItemSubscription
>;
export const onCreateViAViewViAMenu = /* GraphQL */ `subscription OnCreateViAViewViAMenu(
  $filter: ModelSubscriptionViAViewViAMenuFilterInput
) {
  onCreateViAViewViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAViewViAMenuSubscriptionVariables,
  APITypes.OnCreateViAViewViAMenuSubscription
>;
export const onUpdateViAViewViAMenu = /* GraphQL */ `subscription OnUpdateViAViewViAMenu(
  $filter: ModelSubscriptionViAViewViAMenuFilterInput
) {
  onUpdateViAViewViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAViewViAMenuSubscriptionVariables,
  APITypes.OnUpdateViAViewViAMenuSubscription
>;
export const onDeleteViAViewViAMenu = /* GraphQL */ `subscription OnDeleteViAViewViAMenu(
  $filter: ModelSubscriptionViAViewViAMenuFilterInput
) {
  onDeleteViAViewViAMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAViewViAMenuSubscriptionVariables,
  APITypes.OnDeleteViAViewViAMenuSubscription
>;
export const onCreateViAMenuViAMenuItem = /* GraphQL */ `subscription OnCreateViAMenuViAMenuItem(
  $filter: ModelSubscriptionViAMenuViAMenuItemFilterInput
) {
  onCreateViAMenuViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViAMenuViAMenuItemSubscriptionVariables,
  APITypes.OnCreateViAMenuViAMenuItemSubscription
>;
export const onUpdateViAMenuViAMenuItem = /* GraphQL */ `subscription OnUpdateViAMenuViAMenuItem(
  $filter: ModelSubscriptionViAMenuViAMenuItemFilterInput
) {
  onUpdateViAMenuViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViAMenuViAMenuItemSubscriptionVariables,
  APITypes.OnUpdateViAMenuViAMenuItemSubscription
>;
export const onDeleteViAMenuViAMenuItem = /* GraphQL */ `subscription OnDeleteViAMenuViAMenuItem(
  $filter: ModelSubscriptionViAMenuViAMenuItemFilterInput
) {
  onDeleteViAMenuViAMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViAMenuViAMenuItemSubscriptionVariables,
  APITypes.OnDeleteViAMenuViAMenuItemSubscription
>;
