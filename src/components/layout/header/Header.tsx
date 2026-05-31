import styles from "./Header.module.css";
import logo from "@/assets/images/logos/Logo.PNG";
import { Link,useNavigate } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useCart } from "@/features/cart/CartContext";
import { User,ShoppingCart,Home,Truck, MapPin, CircleHelp, BadgePercent, Phone, Menu, ChevronRight,X} from "lucide-react";




// Main header component
export function Header() {


  // Get cart items from cart context to show item count badge on cart icon
  const { cartItems,total } = useCart();
// Calculate total quantity of items in the cart for badge count
const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);



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
 <Menu size={25} strokeWidth={2.0} />
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
    <X size={28} strokeWidth={2.2} />
  </button>

  <ul>
    <li>
      <Link to="/">
       <Home  /> HOME
     <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>

    <li>
      <Link to="#">
        <Truck /> DELIVERY
      <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>

    <li>
      <Link to="#">
        <MapPin />  LOCATIONS
       <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>

    <li>
      <Link to="#">
        <CircleHelp /> ABOUT
        <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>

    <li>
      <Link to="#">
       <BadgePercent /> DEALS
      <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>

    <li>
      <Link to="#">
        <Phone /> CONTACT
       <ChevronRight className={styles.chevron} size={30} />
      </Link>
    </li>
<li>
  <Link 
     to="/login" onClick={handleAuthClick}// handle login/logout logic
     >
    <User /> {isLoggedIn ? "LOGOUT" : "LOGIN"}  {/* show "Logout" if logged in, otherwise "Login"*/}
     <ChevronRight className={styles.chevron} size={30} />
  </Link>
</li>

  </ul>

</nav>
                         {/*  User & Cart box */}
<div className={styles.headerTools}>

  {/* User Icon */}
  <Link to="/login" 
  onClick={handleUserIconClick}// prevent navigation if logged in
  className={`${styles.iconBtn} ${styles.userBtn}`}>
  <User className={`${styles.iconBtn} ${styles.userBtn}`} />
   
    <span className={styles.userText} onClick={handleAuthClick}>{/*} handle login/logout logic*/}
   {isLoggedIn ? "LOGOUT" : "LOGIN"} {/* show "Logout" if logged in, otherwise "Login" */}
    </span>

  </Link>


{cartCount > 0 && ( // if cart is not empty, show total price next to cart icon
<span className={styles.cartTotal}> {/* show total price */}
    {total.toFixed(2)} €
  </span>
)}



  {/* Cart Icon */}
  <Link to="/cart" 
  className={`${styles.iconBtn} ${styles.cartBtn}`}>
    <ShoppingCart className={`${styles.iconBtn} ${styles.cartBtn}`} />

 {/* Show cart item count badge if there are items in the cart */}
     {cartCount > 0 && (
      <span className={styles.cartBadge}> {cartCount} </span>
  )}

  </Link>
</div>

      </div>
    </header>
  );
}