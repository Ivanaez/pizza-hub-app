import { ProductSection } from "@/components/product/ProductSection/ProductSection";
import styles from "./ComboDealsPage.module.css";

export function ComboDealsPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>COMBO DEALS</h1>
      <ProductSection productSource="comboDeals" />
    </main>
  );
}
