import { CategoryCarousel } from "../../../components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection } from "../../../components/product/ProductSection/ProductSection";
import styles from "./SoftDrinksPage.module.css";
// Soft drinks menu page 
export function SoftDrinksPage() {
 
  return (
    // Main page content
    <main className={styles.page}>
      <CategoryCarousel />
      <ProductSection category="soft-drinks" />
    </main>
  );
}