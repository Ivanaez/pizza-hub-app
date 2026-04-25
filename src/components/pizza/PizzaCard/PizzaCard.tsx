import styles from "./PizzaCard.module.css";
import linkButton from "../../../ui/LinkButton/LinkButton.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../features/cart/CartContext";

/* Props for the PizzaCard component */
type Props = {
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  detailsHref: string;

}



/* Function component for the PizzaCard */
export function PizzaCard({
  title,priceFrom,imageSrc,imageAlt,detailsHref
  
}: Props) {
  const { addToCart } = useCart(); // Get addToCart function from cart context

  return (

                /* pizza card main container */
    <article className={styles.pizzaCard}>

                  {/* pizza image */}
        <img  className={styles.pizzaImg}  src={imageSrc} alt={imageAlt}  />
      

     {/* pizza card divider line */}
      <div className={styles.pizzaDivider} />

          {/* pizza title and price */}
      <div className={styles.pizzaContent}>
        <h3 className={styles.pizzaTitle}> {title} </h3>
        <p className={styles.pizzaPrice}>  from {priceFrom.toFixed(2)}€  </p>
      </div>

       {/* pizza action buttons container */}
      <div className={styles.pizzaActions}>

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
  Add to Cart
</button>
                       {/* Link Button Details */}
        <Link to={detailsHref} className={`${styles.btn} ${linkButton.linkButton} ${linkButton.secondary} `}>
          Details
        </Link>
      </div>
    </article>
  );
  
}