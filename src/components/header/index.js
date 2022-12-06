import Nav from "../nav";
import styles from "./header.module.scss";

const Header = ({ data }) => {
  console.log("DataHeader: ", data);
  return (
    <div className={styles["header-container"]}>
      <Nav data={data} />
      <h1>Header Component</h1>
    </div>
  );
};

export default Header;
