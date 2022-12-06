import Link from "next/link";
import styles from "./nav.module.scss";
import { Image } from "next/image";

const Nav = ({ data }) => {
  console.log("MENU NAV: ", data);
  return (
    <nav className={styles.navigation}>
      <div>
        <ul className={styles["flex-content"]}>
          <li>
            <h2>LOGO</h2>
          </li>
          {data.HeaderMenus.map((menu) => {
            return (
              <li key={menu.id}>
                <Link href={menu.node.path}>{menu.node.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

/**
 * 
 *  
          {menus.map((menu) => {
            return (
              <li key={menu.id}>
                <Link href={menu.node.path}>{menu.node.label}</Link>
              </li>
            );
          })}
 */
