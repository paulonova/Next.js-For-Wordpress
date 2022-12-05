import styles from "./layout.module.scss";

const Layout = ({ data, children }) => {
  console.log("DataProps: ", data);
  return <div>{children}</div>;
};

export default Layout;
