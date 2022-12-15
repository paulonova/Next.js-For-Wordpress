import Nav from "../nav";
import styles from "./header.module.scss";
import { isEmpty } from "lodash";

const Header = ({ menus, header }) => {
  if (isEmpty(menus)) {
    return null;
  }
  return (
    <div className={styles["header-container"]}>
      <Nav header={header} menus={menus} />
      <h1>{header.siteTitle}</h1>
    </div>
  );
};

export default Header;
