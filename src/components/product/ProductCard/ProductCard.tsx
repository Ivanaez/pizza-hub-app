import styles from "./ProductCard.module.css";
import linkButton from "@/ui/LinkButton/LinkButton.module.css";
import { Link } from "react-router-dom";
import { useCart } from "@/features/cart/CartContext";
import { Eye, ShoppingCart, Star } from "lucide-react";

type ProductCardVariant = "default" | "best-seller";

/* Props for the Card component */
type Props = {
  id: number;
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  weight: string | null;
  cartItemId?: string;
  detailsPath?: string;
  hasDetails?: boolean;
  variant?: ProductCardVariant;
  
 
}



/* Function component for the card */
export function ProductCard({id,title,priceFrom,imageSrc,imageAlt = "", weight, cartItemId = `product-${id}`, detailsPath = `/product/${id}`, hasDetails = true, variant = "default"}: Props) {
  
  const { addToCart } = useCart(); // Get addToCart function from cart context
  const productWeight = weight?.trim();
  const isBestSeller = variant === "best-seller";

  return (

                /*  Product card main container */
    <article className={`${styles.productCard} ${isBestSeller ? styles.bestSellerCard : ""}`} >

                  {/* bestseller badge */}
      {isBestSeller && (
        <div className={styles.bestSellerBadge}>
          <Star size={16} strokeWidth={2.5} />
          
        </div>
      )}

                  {/* card image */}
        <img  className={styles.cardImg}  src={imageSrc} alt={imageAlt}  />
      

     {/*  card divider line */}
      <div className={styles.cardDivider} />

          {/*  title and price */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}> {title} </h3>
        <div className={styles.cardMeta}>
          <p className={styles.cardPrice}>   {priceFrom.toFixed(2)} €  </p>

          {productWeight && (
            <>
              <span className={styles.metaSeparator} aria-hidden="true" />
              <span className={styles.productWeight}>{productWeight}</span>
            </>
          )}
        </div>
      </div>

       {/* card action buttons container */}
      <div className={styles.cardActions}>

                      {/*  Button add */}
        <button
  className={`${styles.btn} ${hasDetails ? "" : styles.fullAction} ${linkButton.linkButton} ${linkButton.primary}`}
  onClick={() =>
    addToCart({
      id: cartItemId,
      title: title,
      price: priceFrom,
      image: imageSrc,
      quantity: 1,

    })
  }
>
   <ShoppingCart size={16} strokeWidth={3} />
  {hasDetails ? "ADD" : "ADD TO CART"}
</button>
                       {/* Link Button Details */}
        {hasDetails && (
        <Link to={detailsPath} className={`${styles.btn} ${linkButton.linkButton} ${linkButton.secondary} `}>
        <Eye size={20} strokeWidth={3} />
          DETAILS
        </Link>
        )}
      </div>
    </article>
  );
  
}
