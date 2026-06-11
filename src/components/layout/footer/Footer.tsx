import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import {Phone,Clock,MapPin} from "lucide-react"

import facebookLogo from "../../../assets/images/social/facebook-logo.svg";
import instagramLogo from "../../../assets/images/social/instagram-logo.svg";
import twitterLogo from "../../../assets/images/social/twitter-x-logo.svg";
// Main footer component
export function Footer() {
  return (
                    // Main footer element with styling
    <footer className={styles.mainFooter}>
 
                    {/* footer-Container */}
      <div className={styles.footerContainer}>

       {/* Footer navigation links */}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
           <Link to="#">CONTACT</Link>
            <Link to="/terms-conditions">TERMS & CONDITIONS</Link>
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
    <p className={styles.footerInfoTitle}>Contact Us</p>

    <p>
     <Phone size={18} strokeWidth={2.5}/>{" "}
      <a href="tel:+493012345678">+49 30 1234 5678</a>
    </p>

    <p>
     <Clock size={18} strokeWidth={2.5}  /> {" "}
      Mon - Sun: 09:30 AM - 22:00 PM
    </p>

    <p>
     <MapPin size={20} strokeWidth={2.5} />{" "}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Alexanderplatz+1+10178+Berlin+Germany"
        target="_blank"
        rel="noreferrer"
      >
        Alexanderplatz 1, 10178 Berlin, Germany
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
}
