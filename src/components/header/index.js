import styles from "./header.module.scss";

const Header = ({ title }) => {
  return (
    <div className={styles["header-container"]}>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
