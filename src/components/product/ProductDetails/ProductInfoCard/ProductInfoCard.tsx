import styles from "./ProductInfoCard.module.css";

/* Product information card */
export function ProductInfoCard() {
  return (
    <aside className={styles.card}>
      <h2 className={styles.title}>Description</h2>
      <p className={styles.description}>
        Short, clear product description will appear here. This is a placeholder showing where real product data will load.
      </p>

      <div className={styles.section}>
        <h3>Options</h3>
        <p className={styles.sectionText}>Size, add-ons and special requests will appear here.</p>
      </div>

      <div className={styles.section}>
        <h3>Allergens</h3>
        <p className={styles.sectionText}>Allergen information important for safe ordering.</p>
      </div>
    </aside>
  );
}
