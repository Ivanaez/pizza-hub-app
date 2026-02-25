import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

import facebookLogo from "../../../assets/images/social/facebook-logo.svg";
import instagramLogo from "../../../assets/images/social/instagram-logo.svg";
import twitterLogo from "../../../assets/images/social/twitter-x-logo.svg";
// Main footer component
const Footer = () => {
  return (
                    // Main footer element with styling
    <footer className={styles.mainFooter}>
 
                    {/* footer-Container */}
      <div className={styles.footerContainer}>

       {/* Footer navigation links */}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <Link to="/help">Help / FAQ</Link>
           <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms & Privacy</Link>
</nav>
                       {/* Social media links with icons */}
<div className={styles.footerSocial}>
  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
    <img src={facebookLogo} alt="Facebook" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
    <img src={instagramLogo} alt="Instagram" />
  </a>
  <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
    <img src={twitterLogo} alt="X" />
  </a>
</div>

                     {/* Divider line for visual separation */}
<div className={styles.footerDivider}></div>

                           {/* Footer info */}
<div className={styles.footerInfo}>
  <div className={styles.footerInfoBox}>
    <p className={styles.footerInfoTitle}>Contact:</p>

    <p>
      <i className="fa-solid fa-phone" aria-hidden="true"></i>{" "}
      <a href="tel:+442079460958">+44 20 7946 0958</a>
    </p>

    <p>
      <i className="fa-solid fa-clock" aria-hidden="true"></i>{" "}
      Mon - Sun: 09:30 - 22:00
    </p>

    <p>
      <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{" "}
      <a
        href="https://www.google.com/maps/search/?api=1&query=221B+Baker+Street+London+NW1+6XE"
        target="_blank"
        rel="noreferrer"
      >
        221B Baker Street, London NW1 6XE, United Kingdom
      </a>
    </p>
  </div>
</div>


                {/* Footer bottom text */}
    <div className={styles.footerBottom}>
      <p>© 2026 PizzaHub. All rights reserved.</p>
    </div>



      </div>

      
    </footer>
  );
};

export default Footer;