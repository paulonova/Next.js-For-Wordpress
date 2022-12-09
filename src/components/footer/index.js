import styles from "./_footer.module.scss";
import { BsFacebook } from "react-icons/bs";

const Footer = ({ title, footer }) => {
  console.log("FOOTER: ", footer);
  return (
    <footer className={styles["footer-container"]}>
      <h1>{title}</h1>
      <div className={styles.media}>
        <p>
          <a target='_blank' href={footer.socialLinks[0].iconUrl}>
            <BsFacebook />
          </a>
        </p>
        <p>{footer.copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
