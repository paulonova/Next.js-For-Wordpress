import Link from "next/link";
import styles from "./_navigation.module.scss";
import { Fragment } from "react";
import { useState } from "react";

const Nav = ({ menus, header }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Fragment>
      <nav className={styles.navigation}>
        <div>
          <ul className={styles["flex-content"]}>
            <li>
              <Link href='/'>
                <img
                  src={header.siteLogoUrl}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </li>
            {menus.headerMenus.map((menu) => {
              return (
                <li key={menu.node.id}>
                  <Link href={menu.node.path}>{menu.node.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/** Hamburger Menu */}
      <div
        onClick={openMenu}
        className={
          isOpen
            ? [styles["button_container"], styles.active].join(" ")
            : styles["button_container"]
        }
      >
        <span className={styles.top}></span>
        <span className={styles.middle}></span>
        <span className={styles.bottom}></span>
      </div>

      <div
        className={
          isOpen ? [styles.overlay, styles.open].join(" ") : styles.overlay
        }
      >
        <nav className={styles["overlay-menu"]}>
          <ul>
            <li>
              <Link href='/'>
                <img src='/nasa_logo.png' alt='logo' width='100' height='100' />
              </Link>
            </li>
            {menus.headerMenus.map((menu) => {
              return (
                <li key={menu.node.id}>
                  <Link href={menu.node.path}>{menu.node.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Nav;
