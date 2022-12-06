import "../styles/globals.scss";
import Footer from "../components/footer/index";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Footer title='Footer Component' />
    </ApolloProvider>
  );
}

export default MyApp;
