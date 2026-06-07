import { BackButton } from "@/components/navigation/BackButton/BackButton";
import { ProductInfoCard } from "./ProductInfoCard/ProductInfoCard";
import { ProductHero } from "./ProductHero/ProductHero";
import styles from "./ProductDetails.module.css";

/* Product details layout */
export function ProductDetails() {

   return (
    <section className={styles.details}>
      <div className={styles.topRow}>
        <BackButton />

      <div className={styles.productHeading}>
        <h1 className={styles.productTitle}>Product Name</h1>
        <span className={styles.productWeight}>500 g</span>
        </div>
      </div>

    <div className={styles.grid}>
        <div className={styles.heroColumn}>
          <ProductHero />
        </div>

      <div className={styles.sidebar}>
        <ProductInfoCard />
        </div>
      </div>
    </section>
  );
}
