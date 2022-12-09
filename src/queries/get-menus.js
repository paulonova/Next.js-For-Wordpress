import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

/**
 * Here I create a Fragment in GraphQl and the tutorial is here:
 * https://codeytek.com/are-you-using-fragments-in-graphql/
 */

const HeaderFooter = `
    query NewQuery {
      header: getHeader {
        favicon
        siteLogoUrl
        siteTagLine
        siteTitle
      }
      headerMenus: menuItems(
        where: { location: HCMS_MENU_HEADER, parentId: "0" }
      ) {
        edges {
          node {
            id
            label
            url
            path
            childItems {
              edges {
                node {
                  id
                  path
                  url
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
            url
            path
          }
        }
      }
      footer: getFooter {
        copyrightText
        sidebarOne
        sidebarTwo
        socialLinks {
          iconName
          iconUrl
        }
      }
    }
`;

const GET_MENUS = gql`
  ${HeaderFooter}
`;

export default GET_MENUS;
