import { CategoryCarousel } from "@/components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection } from "@/components/product/ProductSection/ProductSection";
import styles from "./PizzasPage.module.css";



// Pizza products page
export function PizzasPage() {

  return (
    // Pizza page layout
    <main className={styles.page}>
      <CategoryCarousel />
       <h1 className={styles.pageTitle}>PIZZAS</h1>
       <ProductSection category="pizzas" />
    </main>
  );
}
