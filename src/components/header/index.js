import Nav from "../nav";
import styles from "./header.module.scss";
import { isEmpty } from "lodash";

const Header = ({ data }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className={styles["header-container"]}>
      <Nav data={data} />
      <h1>Header Component</h1>
    </div>
  );
};

export default Header;
