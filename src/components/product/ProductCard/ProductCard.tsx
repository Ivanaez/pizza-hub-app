import styles from "./ProductCard.module.css";
import linkButton from "../../../ui/LinkButton/LinkButton.module.css";
import { Link } from "react-router-dom";
import { useCart } from "@/features/cart/CartContext";
import { Eye, ShoppingCart } from "lucide-react";

/* Props for the Card component */
type Props = {
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  detailsHref: string;
  variant?: "carousel" | "section";
}



/* Function component for the card */
export function ProductCard({title,priceFrom,imageSrc,imageAlt,detailsHref,variant = "carousel"}: Props) {
  
  const { addToCart } = useCart(); // Get addToCart function from cart context

  return (

                /*  Product card main container */
    <article className={`${styles.productCard} ${styles[variant]}`}>

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
  className={`${styles.btn} ${linkButton.linkButton} ${linkButton.primary}`}
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
   <ShoppingCart size={16} />
  ADD
</button>
                       {/* Link Button Details */}
        <Link to={detailsHref} className={`${styles.btn} ${linkButton.linkButton} ${linkButton.secondary} `}>
        <Eye size={20} />
          DETAILS
        </Link>
      </div>
    </article>
  );
  
}