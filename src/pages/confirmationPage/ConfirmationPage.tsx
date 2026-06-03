import { Check } from "lucide-react";
import { Navigate, useLocation } from "react-router-dom";
import styles from "./ConfirmationPage.module.css";

type LocationState = { fromCheckout?: boolean } | null;

export function ConfirmationPage() {
  // Read navigation state
  const location = useLocation() as { state: LocationState };

  // Redirect if accessed directly
  if (!location?.state?.fromCheckout) {
    return <Navigate to="/checkout" replace />;
  }

  // Render confirmation page
  return (
    <main className={styles.confirmationPage}>
      <div className={styles.confirmationContainer}>
        <section className={styles.confirmationSteps}>
          <div className={styles.confirmationStep}>
          <span>
             <Check size={20} />
                  </span>
             <p>Cart</p>
          </div>

          <div className={styles.confirmationStep}>
            <span>
              <Check size={20} />
                 </span>
            <p>Checkout</p>
          </div>


          <div className={styles.confirmationStep}>
            <span>
           <Check size={20} />
            </span>
            <p>Confirmation</p>
          </div>
        </section>

        <section className={styles.confirmationCard}>
          <h1>Order Confirmed</h1>
          <p>Thank you for your order!</p>
        </section>
      </div>
    </main>
  );
}
