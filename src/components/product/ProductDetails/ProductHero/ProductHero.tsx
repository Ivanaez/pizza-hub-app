import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import { useCart } from "@/features/cart/CartContext";
import styles from "./ProductHero.module.css";

type ProductHeroProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

/* Product hero section */
export function ProductHero({ id, name, price, imageUrl }: ProductHeroProps) {
  const { addToCart } = useCart();

  // Add current product
  const handleAddToCart = () => {
    addToCart({
      id: String(id),
      title: name,
      price,
      image: imageUrl,
      quantity: 1,
    });
  };

  return (
    <section className={styles.hero}>

      <div className={styles.imageFrame}>
        <img
          className={styles.productImage}
          src={imageUrl}
          alt={name}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.price}>
          {price.toFixed(2)} {"\u20ac"}
        </div>

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
          onClick={handleAddToCart}
          className={styles.addButton}>
            <ShoppingCart size={16} strokeWidth={3} />
            ADD TO CART
          </Button>
        </div>

      </div>
    </section>
  );
}
