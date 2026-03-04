import styles from "./PizzaCard.module.css";
import linkButton from "../../../ui/LinkButton/LinkButton.module.css";
import { Link } from "react-router-dom";

/* Props for the PizzaCard component */
type Props = {
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  orderHref: string;
  detailsHref: string;

}
/* Function component for the PizzaCard */
export function PizzaCard({
  title,priceFrom,imageSrc,imageAlt,orderHref,detailsHref
}: Props) {

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

                      {/* Link Button Order */}
        <Link to={orderHref} className={`${styles.btn}  ${linkButton.linkButton}  ${linkButton.primary} `}>
          Select
        </Link>
                       {/* Link Button Details */}
        <Link to={detailsHref} className={`${styles.btn} ${linkButton.linkButton} ${linkButton.secondary} `}>
          Details
        </Link>
      </div>
    </article>
  );
  
}