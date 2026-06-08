import styles from "./ProductCard.module.css";
import linkButton from "@/ui/LinkButton/LinkButton.module.css";
import { Link } from "react-router-dom";
import { useCart } from "@/features/cart/CartContext";
import { Eye, ShoppingCart } from "lucide-react";

/* Props for the Card component */
type Props = {
  id: number;
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  hasDetails?: boolean;
  
 
}



/* Function component for the card */
export function ProductCard({id,title,priceFrom,imageSrc,imageAlt = "", hasDetails = true}: Props) {
  
  const { addToCart } = useCart(); // Get addToCart function from cart context

  return (

                /*  Product card main container */
    <article className={styles.productCard} >

                  {/* card image */}
        <img  className={styles.cardImg}  src={imageSrc} alt={imageAlt}  />
      

     {/*  card divider line */}
      <div className={styles.cardDivider} />

          {/*  title and price */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}> {title} </h3>
        <p className={styles.cardPrice}>   {priceFrom.toFixed(2)} €  </p>
      </div>

       {/* card action buttons container */}
      <div className={styles.cardActions}>

                      {/*  Button add */}
        <button
  className={`${styles.btn} ${hasDetails ? "" : styles.fullAction} ${linkButton.linkButton} ${linkButton.primary}`}
  onClick={() =>
    addToCart({
      id: title,
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
        <Link to={`/product/${id}`} className={`${styles.btn} ${linkButton.linkButton} ${linkButton.secondary} `}>
        <Eye size={20} strokeWidth={3} />
          DETAILS
        </Link>
        )}
      </div>
    </article>
  );
  
}
