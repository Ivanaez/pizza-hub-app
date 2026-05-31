import styles from "./ConfirmationPage.module.css"
import { Navigate, useLocation } from "react-router-dom";




export function ConfirmationPage() {
  
 // Get navigation state
const location = useLocation();

// Prevent direct access
if (!location.state) {
  return <Navigate to="/checkout" replace />;
}

  return (
    <main className={styles.confirmationPage}>
      <h1>Order Confirmed</h1>
      <p>Thank you for your order!</p>
    </main>
  )
}