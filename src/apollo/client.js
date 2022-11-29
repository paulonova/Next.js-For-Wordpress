import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

/**
 * The credentials: 'include' allows cookies to be automatically sent
 * along with the request 'include' because backend is on another domain.
 *
 * @see https://www.apollographql.com/docs/react/networking/authentication/#cookie
 */

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});

console.log(
  "NEXT_PUBLIC_WORDPRESS_SITE_URL: ",
  `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`
);

/**
 * Here We fetch the Wordpress data
 */
const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  defaultOptions,
});

export default client;
