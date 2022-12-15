import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
import styles from "./_layout.module.scss";

const Layout = ({ menus, children, header, footer }) => {
  console.log("LayoutData: ", menus);
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href={header.favicon} />
      </Head>
      <Header header={header} menus={menus} />
      {children}
      <Footer footer={footer} title='This is the Footer' />
    </div>
  );
};

export default Layout;
