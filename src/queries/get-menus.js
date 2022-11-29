import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

/**
 * Here I create a Fragment in GraphQl and the tutorial is here:
 * https://codeytek.com/are-you-using-fragments-in-graphql/
 */

const GET_MENUS = gql`
headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            id
            label
            url
            path
          }
        }
      }
    }
  }
}
footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
${MenuFragment}
`;

export default GET_MENUS;