import styles from "./Header.module.css";
import logo from "../../../assets/images/logos/Logo.PNG";
import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";

// Main header component
const Header = () => {
               // Menu open/close state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Reference to navigation DOM element
    const menuRef = useRef<HTMLElement | null>(null);

    // Detect click outside menu to close it
    useEffect(() => {
        // Handles outside clicks
    const handleClickOutside = (e: MouseEvent) => {
        // If menu is closed → stop
      if (!isMenuOpen) return;

            // Clicked element
      const target = e.target as Node;

      // If click is outside menu → close it
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
                             // Main header container
    <header className={styles.mainHeader} >

                  {/* Menu toggle button (hamburger) */}
<button
  className={styles.buttonToggle}
  title="Menu"
  aria-label="Menu"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
 ☰
</button>
                       {/* Logo link */}
  <Link to="/" className={styles.logoLink} title="Logo Pizza-Hub">
  <img
    src={logo}
    alt="PizzaHub logo"
    className={styles.logo}
  />
</Link>
                          {/* Navigation Menu (sliding from left) */}
<nav 
ref={menuRef}
className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
  <button className={styles.menuClose} 
   aria-label="Close menu"
   
   onClick={() => setIsMenuOpen(false)}
   >
    <i className="fa-solid fa-xmark"></i>
  </button>

  <ul>
    <li>
      <Link to="/">
        <i className="fa-solid fa-house"></i> Home
      </Link>
    </li>

    <li>
      <Link to="/delivery">
        <i className="fa-solid fa-truck"></i> Delivery
      </Link>
    </li>

    <li>
      <Link to="/locations">
        <i className="fa-solid fa-location-dot"></i> Locations
      </Link>
    </li>

    <li>
      <Link to="/about">
        <i className="fa-solid fa-info-circle"></i> About
      </Link>
    </li>

    <li>
      <Link to="/deals">
        <i className="fa-solid fa-tag"></i> Deals
      </Link>
    </li>

    <li>
      <Link to="/contact">
        <i className="fa-solid fa-phone"></i> Contact
      </Link>
    </li>
  </ul>
</nav>
                         {/*  User & Cart box */}
<div className={styles.headerTools}>

  {/* User Icon */}
  <Link to="/login" className={`${styles.iconBtn} ${styles.userBtn}`}>
    <i className="fa-solid fa-user"></i>
    <span className={styles.userText}>Login</span>
  </Link>

  {/* Cart Icon */}
  <Link to="/cart" className={`${styles.iconBtn} ${styles.cartBtn}`}>
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>
</div>

    </header>
  );
};

export default Header;