import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import styles from "./ProductHero.module.css";

/* Product hero section */
export function ProductHero() {
  return (
    <section className={styles.hero}>

      <div className={styles.imagePlaceholder}>
        <span>Product Image</span>
      </div>

      <div className={styles.details}>
        <div className={styles.price}>8.90 €</div>

        <div className={styles.quantityRow}>
          <div className={styles.quantityControl}>
            <button className={styles.quantityButton}>
              <Minus size={16} strokeWidth={3} />
            </button>
            <span className={styles.quantityValue}>1</span>
            <button className={styles.quantityButton}>
              <Plus size={16} strokeWidth={3} />
            </button>
          </div>
          <Button 
          type="button" 
          variant="secondary" 
          className={styles.addButton}>
            <ShoppingCart size={16} strokeWidth={3} />
            ADD TO CART
          </Button>
        </div>

      </div>
    </section>
  );
}
