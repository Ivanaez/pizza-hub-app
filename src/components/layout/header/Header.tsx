import styles from "./Header.module.css";
import logo from "../../../assets/images/logos/Logo.PNG";
import { Link,useNavigate } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import { supabase } from "../../../lib/supabase";




// Main header component
const Header = () => {
               // Menu open/close state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

// User authentication state (logged in / logged out)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

// React Router hook for programmatic navigation (redirect user via code)
     const navigate = useNavigate();

// Reference to navigation DOM element
    const menuRef = useRef<HTMLElement | null>(null);



    // handle login / logout click
    const handleAuthClick = async () => {
       if (isLoggedIn) {
    await supabase.auth.signOut(); // logout user
    navigate("/login"); // redirect login
  } else {
    navigate("/login"); // go login
  }
   };



// user icon click
const handleUserIconClick = (e: React.MouseEvent) => {
  if (isLoggedIn) {
    e.preventDefault(); // stop navigation
    return; // do nothing
  }
};



// Listen for authentication state (on mount)
useEffect(() => {
  // Function to get current session from Supabase
  const checkSession = async () => {
    // Call Supabase API to get current session
    const { data, error } = await supabase.auth.getSession();

    // If there is an error -> log it and mark user as logged out
    if (error) {
      console.error(error);
      setIsLoggedIn(false);
      return;
    }

    // If session exists -> user is logged in (true), otherwise false
    setIsLoggedIn(!!data.session);
  };

  // Run once when component mounts
  checkSession();

  // Subscribe to auth changes (login / logout events)
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    // Update state whenever auth state changes
    setIsLoggedIn(!!session);
  });

  // Cleanup: unsubscribe when component unmounts
  return () => {
    subscription.unsubscribe();
  };
}, []);


    

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

      <div className={styles.headerInner}>

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
<li>
  <Link 
     to="/login" onClick={handleAuthClick}// handle login/logout logic
     >
    <i className="fa-solid fa-user"></i> 
    {isLoggedIn ? "Logout" : "Login"}  {/* show "Logout" if logged in, otherwise "Login"*/}
  </Link>
</li>

  </ul>

</nav>
                         {/*  User & Cart box */}
<div className={styles.headerTools}>

  {/* User Icon */}
  <Link to="/login" onClick={handleUserIconClick}// prevent navigation if logged in
  className={`${styles.iconBtn} ${styles.userBtn}`}>
    <i className="fa-solid fa-user"></i>

    <span className={styles.userText} onClick={handleAuthClick}>{/*} handle login/logout logic*/}
   {isLoggedIn ? "Logout" : "Login"} {/* show "Logout" if logged in, otherwise "Login" */}
    </span>

  </Link>

  {/* Cart Icon */}
  <Link to="/cart" className={`${styles.iconBtn} ${styles.cartBtn}`}>
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>
</div>

      </div>
    </header>
  );
};

export default Header;