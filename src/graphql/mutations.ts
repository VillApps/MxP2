/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createViAUserEx = /* GraphQL */ `mutation CreateViAUserEx(
  $input: CreateViAUserExInput!
  $condition: ModelViAUserExConditionInput
) {
  createViAUserEx(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAUserExMutationVariables,
  APITypes.CreateViAUserExMutation
>;
export const updateViAUserEx = /* GraphQL */ `mutation UpdateViAUserEx(
  $input: UpdateViAUserExInput!
  $condition: ModelViAUserExConditionInput
) {
  updateViAUserEx(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAUserExMutationVariables,
  APITypes.UpdateViAUserExMutation
>;
export const deleteViAUserEx = /* GraphQL */ `mutation DeleteViAUserEx(
  $input: DeleteViAUserExInput!
  $condition: ModelViAUserExConditionInput
) {
  deleteViAUserEx(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAUserExMutationVariables,
  APITypes.DeleteViAUserExMutation
>;
export const createViAGroup = /* GraphQL */ `mutation CreateViAGroup(
  $input: CreateViAGroupInput!
  $condition: ModelViAGroupConditionInput
) {
  createViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAGroupMutationVariables,
  APITypes.CreateViAGroupMutation
>;
export const updateViAGroup = /* GraphQL */ `mutation UpdateViAGroup(
  $input: UpdateViAGroupInput!
  $condition: ModelViAGroupConditionInput
) {
  updateViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAGroupMutationVariables,
  APITypes.UpdateViAGroupMutation
>;
export const deleteViAGroup = /* GraphQL */ `mutation DeleteViAGroup(
  $input: DeleteViAGroupInput!
  $condition: ModelViAGroupConditionInput
) {
  deleteViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAGroupMutationVariables,
  APITypes.DeleteViAGroupMutation
>;
export const createViAView = /* GraphQL */ `mutation CreateViAView(
  $input: CreateViAViewInput!
  $condition: ModelViAViewConditionInput
) {
  createViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAViewMutationVariables,
  APITypes.CreateViAViewMutation
>;
export const updateViAView = /* GraphQL */ `mutation UpdateViAView(
  $input: UpdateViAViewInput!
  $condition: ModelViAViewConditionInput
) {
  updateViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAViewMutationVariables,
  APITypes.UpdateViAViewMutation
>;
export const deleteViAView = /* GraphQL */ `mutation DeleteViAView(
  $input: DeleteViAViewInput!
  $condition: ModelViAViewConditionInput
) {
  deleteViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAViewMutationVariables,
  APITypes.DeleteViAViewMutation
>;
export const createViAMenu = /* GraphQL */ `mutation CreateViAMenu(
  $input: CreateViAMenuInput!
  $condition: ModelViAMenuConditionInput
) {
  createViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAMenuMutationVariables,
  APITypes.CreateViAMenuMutation
>;
export const updateViAMenu = /* GraphQL */ `mutation UpdateViAMenu(
  $input: UpdateViAMenuInput!
  $condition: ModelViAMenuConditionInput
) {
  updateViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAMenuMutationVariables,
  APITypes.UpdateViAMenuMutation
>;
export const deleteViAMenu = /* GraphQL */ `mutation DeleteViAMenu(
  $input: DeleteViAMenuInput!
  $condition: ModelViAMenuConditionInput
) {
  deleteViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAMenuMutationVariables,
  APITypes.DeleteViAMenuMutation
>;
export const createViAMenuItem = /* GraphQL */ `mutation CreateViAMenuItem(
  $input: CreateViAMenuItemInput!
  $condition: ModelViAMenuItemConditionInput
) {
  createViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAMenuItemMutationVariables,
  APITypes.CreateViAMenuItemMutation
>;
export const updateViAMenuItem = /* GraphQL */ `mutation UpdateViAMenuItem(
  $input: UpdateViAMenuItemInput!
  $condition: ModelViAMenuItemConditionInput
) {
  updateViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAMenuItemMutationVariables,
  APITypes.UpdateViAMenuItemMutation
>;
export const deleteViAMenuItem = /* GraphQL */ `mutation DeleteViAMenuItem(
  $input: DeleteViAMenuItemInput!
  $condition: ModelViAMenuItemConditionInput
) {
  deleteViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAMenuItemMutationVariables,
  APITypes.DeleteViAMenuItemMutation
>;
export const createViAUserExViAGroup = /* GraphQL */ `mutation CreateViAUserExViAGroup(
  $input: CreateViAUserExViAGroupInput!
  $condition: ModelViAUserExViAGroupConditionInput
) {
  createViAUserExViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAUserExViAGroupMutationVariables,
  APITypes.CreateViAUserExViAGroupMutation
>;
export const updateViAUserExViAGroup = /* GraphQL */ `mutation UpdateViAUserExViAGroup(
  $input: UpdateViAUserExViAGroupInput!
  $condition: ModelViAUserExViAGroupConditionInput
) {
  updateViAUserExViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAUserExViAGroupMutationVariables,
  APITypes.UpdateViAUserExViAGroupMutation
>;
export const deleteViAUserExViAGroup = /* GraphQL */ `mutation DeleteViAUserExViAGroup(
  $input: DeleteViAUserExViAGroupInput!
  $condition: ModelViAUserExViAGroupConditionInput
) {
  deleteViAUserExViAGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAUserExViAGroupMutationVariables,
  APITypes.DeleteViAUserExViAGroupMutation
>;
export const createViAGroupViAView = /* GraphQL */ `mutation CreateViAGroupViAView(
  $input: CreateViAGroupViAViewInput!
  $condition: ModelViAGroupViAViewConditionInput
) {
  createViAGroupViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAGroupViAViewMutationVariables,
  APITypes.CreateViAGroupViAViewMutation
>;
export const updateViAGroupViAView = /* GraphQL */ `mutation UpdateViAGroupViAView(
  $input: UpdateViAGroupViAViewInput!
  $condition: ModelViAGroupViAViewConditionInput
) {
  updateViAGroupViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAGroupViAViewMutationVariables,
  APITypes.UpdateViAGroupViAViewMutation
>;
export const deleteViAGroupViAView = /* GraphQL */ `mutation DeleteViAGroupViAView(
  $input: DeleteViAGroupViAViewInput!
  $condition: ModelViAGroupViAViewConditionInput
) {
  deleteViAGroupViAView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAGroupViAViewMutationVariables,
  APITypes.DeleteViAGroupViAViewMutation
>;
export const createViAGroupViAMenu = /* GraphQL */ `mutation CreateViAGroupViAMenu(
  $input: CreateViAGroupViAMenuInput!
  $condition: ModelViAGroupViAMenuConditionInput
) {
  createViAGroupViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAGroupViAMenuMutationVariables,
  APITypes.CreateViAGroupViAMenuMutation
>;
export const updateViAGroupViAMenu = /* GraphQL */ `mutation UpdateViAGroupViAMenu(
  $input: UpdateViAGroupViAMenuInput!
  $condition: ModelViAGroupViAMenuConditionInput
) {
  updateViAGroupViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAGroupViAMenuMutationVariables,
  APITypes.UpdateViAGroupViAMenuMutation
>;
export const deleteViAGroupViAMenu = /* GraphQL */ `mutation DeleteViAGroupViAMenu(
  $input: DeleteViAGroupViAMenuInput!
  $condition: ModelViAGroupViAMenuConditionInput
) {
  deleteViAGroupViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAGroupViAMenuMutationVariables,
  APITypes.DeleteViAGroupViAMenuMutation
>;
export const createViAGroupViAMenuItem = /* GraphQL */ `mutation CreateViAGroupViAMenuItem(
  $input: CreateViAGroupViAMenuItemInput!
  $condition: ModelViAGroupViAMenuItemConditionInput
) {
  createViAGroupViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAGroupViAMenuItemMutationVariables,
  APITypes.CreateViAGroupViAMenuItemMutation
>;
export const updateViAGroupViAMenuItem = /* GraphQL */ `mutation UpdateViAGroupViAMenuItem(
  $input: UpdateViAGroupViAMenuItemInput!
  $condition: ModelViAGroupViAMenuItemConditionInput
) {
  updateViAGroupViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAGroupViAMenuItemMutationVariables,
  APITypes.UpdateViAGroupViAMenuItemMutation
>;
export const deleteViAGroupViAMenuItem = /* GraphQL */ `mutation DeleteViAGroupViAMenuItem(
  $input: DeleteViAGroupViAMenuItemInput!
  $condition: ModelViAGroupViAMenuItemConditionInput
) {
  deleteViAGroupViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAGroupViAMenuItemMutationVariables,
  APITypes.DeleteViAGroupViAMenuItemMutation
>;
export const createViAViewViAMenu = /* GraphQL */ `mutation CreateViAViewViAMenu(
  $input: CreateViAViewViAMenuInput!
  $condition: ModelViAViewViAMenuConditionInput
) {
  createViAViewViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAViewViAMenuMutationVariables,
  APITypes.CreateViAViewViAMenuMutation
>;
export const updateViAViewViAMenu = /* GraphQL */ `mutation UpdateViAViewViAMenu(
  $input: UpdateViAViewViAMenuInput!
  $condition: ModelViAViewViAMenuConditionInput
) {
  updateViAViewViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAViewViAMenuMutationVariables,
  APITypes.UpdateViAViewViAMenuMutation
>;
export const deleteViAViewViAMenu = /* GraphQL */ `mutation DeleteViAViewViAMenu(
  $input: DeleteViAViewViAMenuInput!
  $condition: ModelViAViewViAMenuConditionInput
) {
  deleteViAViewViAMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAViewViAMenuMutationVariables,
  APITypes.DeleteViAViewViAMenuMutation
>;
export const createViAMenuViAMenuItem = /* GraphQL */ `mutation CreateViAMenuViAMenuItem(
  $input: CreateViAMenuViAMenuItemInput!
  $condition: ModelViAMenuViAMenuItemConditionInput
) {
  createViAMenuViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViAMenuViAMenuItemMutationVariables,
  APITypes.CreateViAMenuViAMenuItemMutation
>;
export const updateViAMenuViAMenuItem = /* GraphQL */ `mutation UpdateViAMenuViAMenuItem(
  $input: UpdateViAMenuViAMenuItemInput!
  $condition: ModelViAMenuViAMenuItemConditionInput
) {
  updateViAMenuViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViAMenuViAMenuItemMutationVariables,
  APITypes.UpdateViAMenuViAMenuItemMutation
>;
export const deleteViAMenuViAMenuItem = /* GraphQL */ `mutation DeleteViAMenuViAMenuItem(
  $input: DeleteViAMenuViAMenuItemInput!
  $condition: ModelViAMenuViAMenuItemConditionInput
) {
  deleteViAMenuViAMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViAMenuViAMenuItemMutationVariables,
  APITypes.DeleteViAMenuViAMenuItemMutation
>;
