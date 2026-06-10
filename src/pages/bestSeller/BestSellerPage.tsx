import { ProductSection } from "@/components/product/ProductSection/ProductSection";
import styles from "./BestSellerPage.module.css";



// Best seller page
export function BestSellerPage() {

  return (
     // Best seller container
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>BEST SELLERS</h1>
      <ProductSection category="best-seller" />
    </main>
  );
}
