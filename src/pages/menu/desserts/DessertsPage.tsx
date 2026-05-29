import { CategoryCarousel } from "../../../components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection } from "../../../components/product/ProductSection/ProductSection";
import styles from "./DessertsPage.module.css";


// Desserts category page
export function DessertsPage() {

  return (
    // Desserts page wrapper
    <main className={styles.page}>
        {/* Navigate food categories */}
      <CategoryCarousel />
     <ProductSection category="desserts" />

    </main>
  );
}