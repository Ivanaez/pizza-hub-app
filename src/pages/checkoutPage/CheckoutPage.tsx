import { CheckoutForm } from "@/components/checkout/CheckoutForm/CheckoutForm";
import { useCart } from "@/features/cart/CartContext";
import { Navigate } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

// Checkout page component
export function CheckoutPage() {
  const { cartItems } = useCart();

  // Prevent empty checkout
  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <main className={styles.checkoutPage}>
      <CheckoutForm />
    </main>
  );
}
