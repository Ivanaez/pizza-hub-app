import styles from "./PizzaCard.module.css";

type Props = {
  title: string;
  priceFrom: number;
  imageSrc: string;
  imageAlt: string;
  orderHref: string;
  detailsHref: string;

}
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
        <a href={orderHref} className={`${styles.btn} ${styles.btnSelect}`}>
          Select
        </a>
        <a href={detailsHref} className={`${styles.btn} ${styles.btnDetails}`}>
          Details
        </a>
      </div>
    </article>
  );
  
}