import { CategoryCarousel } from "@/components/category/CategoryCarousel/CategoryCarousel";
import { ProductDetails } from "@/components/product/ProductDetails/ProductDetails";
import styles from "./ProductDetailsPage.module.css";

/* Product details page shell */
export function ProductDetailsPage() {
  return (
    <main className={styles.page}>
      <CategoryCarousel />
      <ProductDetails />
    </main>
  );
}
