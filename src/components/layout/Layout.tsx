import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useCart } from "../../features/cart/CartContext";
import styles from "./Layout.module.css";

// Main layout wrapper for all pages that use header and footer
function Layout() {
  
// Get toast message from cart context to show global notifications
  const { toastMessage } = useCart();  

  return (
                    // This layout will be used for all pages that need header and footer


 <div className="appLayout">

  {/* Global cart toast notification */}
{toastMessage && (
 <div className={`${styles.cartToast} ${styles.cartToastVisible}`}>
    {toastMessage}
  </div>
)}
   
       {/* Global Header ****************************/}
      <Header />
 
        {/* Main content of the page ***************************/}
      <main className="appMain">
        <Outlet />
      </main>
      
      {/* Global Footer ****************************/}
      <Footer />

      </div>
    
  );
}


export default Layout;