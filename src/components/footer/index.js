import styles from "./footer.module.scss";

const Footer = ({ title }) => {
  return (
    <div className={styles["footer-container"]}>
      <h1>{title}</h1>
    </div>
  );
};

export default Footer;
