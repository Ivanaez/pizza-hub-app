import { useState } from "react";
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
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  // Add current product
  const handleAddToCart = () => {
    Array.from({ length: quantity }).forEach(() => {
      addToCart({
        id: String(id),
        title: name,
        price,
        image: imageUrl,
        quantity: 1,
      });
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
          {(price * quantity).toFixed(2)} {"\u20ac"}
        </div>

        <div className={styles.quantityRow}>
          
          <div className={styles.quantityControl}>
            <button
              type="button"
              className={styles.quantityButton}
              aria-label="Decrease quantity"
              onClick={decreaseQuantity}
            >
              <Minus size={16} strokeWidth={3.25} />
            </button>

            <span className={styles.quantityValue}>{quantity}</span>

            <button
              type="button"
              className={styles.quantityButton}
              aria-label="Increase quantity"
              onClick={increaseQuantity}
            >
              <Plus size={16} strokeWidth={3.25} />
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
