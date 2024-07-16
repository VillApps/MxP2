interface QueriesInterface {
  getInitViAUserEx: string;
  getMenusItemsGroups: string;
}
const qS: QueriesInterface = {
  getInitViAUserEx: /* GraphQL */ `
    query getInitViAUserEx($id: ID!) {
      getViAUserEx(id: $id) {
        id
        ViAGroup {
          items {
            viAGroup {
              name
              id
            }
          }
        }
      }
    }
  `,
  getMenusItemsGroups: /* GraphQL */ `
    query getMenusItemsGroups($viAGroupId: ID!) {
      listViAGroupViAMenuItems(filter: { viAGroupId: { eq: $viAGroupId } }) {
        items {
          viAMenuItem {
            id
            name
            url
            orden
            ViAMenu {
              items {
                viAMenu {
                  id
                  name
                  ViAView {
                    items {
                      viAView {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
};

export default qS;
