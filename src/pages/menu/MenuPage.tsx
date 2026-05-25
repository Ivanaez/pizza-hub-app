import { CategoryCarousel } from "../../components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection } from "../../components/product/ProductSection/ProductSection";
import styles from "./MenuPage.module.css";


// Main menu page component
export function MenuPage() {
// Render menu page layout
  return (
// Main menu page container
     <main className={styles.pageContainer}>

      <CategoryCarousel />
      <ProductSection />
    </main>
  );

}