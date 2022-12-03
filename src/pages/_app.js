import "../styles/globals.scss";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header title='Header Component' />
      <Component {...pageProps} />
      <Footer title='Footer Component' />
    </ApolloProvider>
  );
}

export default MyApp;
