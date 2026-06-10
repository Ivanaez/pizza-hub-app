import { CategoryCarousel } from "@/components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection } from "@/components/product/ProductSection/ProductSection";
import styles from "./DessertsPage.module.css";


// Desserts category page
export function DessertsPage() {

  return (
    // Desserts page wrapper
    <main className={styles.page}>
        {/* Navigate food categories */}
      <CategoryCarousel />
     <h1 className={styles.pageTitle}>DESSERTS</h1>
     <ProductSection category="desserts" />

    </main>
  );
}
