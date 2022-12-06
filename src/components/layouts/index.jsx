import Header from "../header";
import styles from "./layout.module.scss";

const Layout = ({ data, children }) => {
  console.log("DataLayout: ", data);
  return (
    <div>
      <Header data={data} />
      {children}
    </div>
  );
};

export default Layout;
