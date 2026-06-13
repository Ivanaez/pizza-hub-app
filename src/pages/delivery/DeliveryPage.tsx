import styles from "./DeliveryPage.module.css";

// Delivery page
export function DeliveryPage() {
  return (
    // Delivery page container
    <main className={styles.page}>
      {/* Delivery card */}
      <article className={styles.deliveryCard}>
        {/* Delivery title */}
        <h1 className={styles.deliveryTitle}>DELIVERY</h1>
      </article>
    </main>
  );
}
