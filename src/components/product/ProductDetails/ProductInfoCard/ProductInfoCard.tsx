import styles from "./ProductInfoCard.module.css";

type ProductInfoCardProps = {
  description: string | null;
};

/* Product information card */
export function ProductInfoCard({ description }: ProductInfoCardProps) {
  const productDescription = description?.trim() || "Product details are not available yet.";

  return (
    <aside className={styles.card}>
      <h2 className={styles.title}>DESCRIPTION</h2>
      <p className={styles.description}>
        {productDescription}
      </p>

      <div className={styles.section}>
        <h3>ALLERGENS</h3>
        <p className={styles.sectionText}>Allergen information important for safe ordering.</p>
      </div>
    </aside>
  );
}
