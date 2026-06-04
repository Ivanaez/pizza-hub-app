import { CategoryCarousel } from "@/components/category/CategoryCarousel/CategoryCarousel";
import styles from "./ProductDetailsPage.module.css";

// Product details page
export function ProductDetailsPage() {
  return (
    // Product details page layout
    <main className={styles.page}>
      <CategoryCarousel />
      {/* Product details content will be added here */}
    </main>
  );
}
