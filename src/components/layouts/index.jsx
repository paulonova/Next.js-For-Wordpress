import Footer from "../footer";
import Header from "../header";
import styles from "./_layout.module.scss";

const Layout = ({ menus, children, header, footer }) => {
  console.log("LayoutData: ", menus);
  return (
    <div>
      <Header header={header} menus={menus} />
      {children}
      <Footer footer={footer} title='This is the Footer' />
    </div>
  );
};

export default Layout;
