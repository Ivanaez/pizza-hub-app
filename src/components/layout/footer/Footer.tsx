import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';


// Main footer component
const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        Footer
      </div>
    </footer>
  );
};

export default Footer;