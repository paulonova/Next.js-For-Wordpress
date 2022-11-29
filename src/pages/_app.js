import "../styles/globals.scss";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header title='Header Component' />
      <Component {...pageProps} />
      <Footer title='Footer Component' />
    </div>
  );
}

export default MyApp;
