import { CategoryCarousel } from "../../../components/category/CategoryCarousel/CategoryCarousel";
import { ProductSection} from "../../../components/product/ProductSection/ProductSection";
import styles from "./BurgersPage.module.css";



// Burgers menu section
export function BurgersPage() {

  return (
     // Burgers page container
    <main className={styles.page}>
       {/* Food category carousel */}
      <CategoryCarousel />
        <ProductSection category="burgers" />
    </main>
  );
}