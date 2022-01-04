import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>© All Rights Reserved {year}</footer>
    );
};

export default Footer;
