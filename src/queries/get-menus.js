import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

/**
 * Here I create a Fragment in GraphQl and the tutorial is here:
 * https://codeytek.com/are-you-using-fragments-in-graphql/
 */

const GET_POSTS = gql`
  query posts {
    edges {
      node {
        date
        title
        uri
      }
    }
  }
`;

export default GET_POSTS;
