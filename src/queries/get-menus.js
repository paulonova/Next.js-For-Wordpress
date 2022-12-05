import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

/**
 * Here I create a Fragment in GraphQl and the tutorial is here:
 * https://codeytek.com/are-you-using-fragments-in-graphql/
 */

const GET_MENUS = gql`
  query NewQuery {
    headerMenus: menuItems(
      where: { location: HCMS_MENU_HEADER, parentId: "0" }
    ) {
      edges {
        node {
          id
          label
          path
          url
          childItems {
            edges {
              node {
                id
                url
                path
                label
              }
            }
          }
        }
      }
    }
    footerMenus: menuItems(
      where: { location: HCMS_MENU_FOOTER, parentId: "0" }
    ) {
      edges {
        node {
          id
          label
          path
          url
        }
      }
    }
  }
`;

export default GET_MENUS;

/**
 * query NewQuery {
    headerMenus: menuItems(
      where: { location: HCMS_MENU_HEADER, parentId: "0" }
    ) {
      edges {
        node {
          id
          label
          path
          url
          childItems {
            edges {
              node {
                id
                url
                path
                label
              }
            }
          }
        }
      }
    }
    footerMenus: menuItems(
      where: { location: HCMS_MENU_FOOTER, parentId: "0" }
    ) {
      edges {
        node {
          id
          label
          path
          url
        }
      }
    }
  }
 */
