import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  createHttpLink,
} from "@apollo/client";

/**
 * Here We fetch the Wordpress data
 */
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
export default client;
