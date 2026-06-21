import comboDealsImage from "@/assets/images/banners/combo-deals.webp";
import promotionsImage from "@/assets/images/banners/promotions.webp";
import styles from "./HomeDeals.module.css";

/* Home deals section */
export function HomeDeals() {
  
     return (
    <section className={styles.homeDeals} aria-label="Special offers">

      {/* Deals cards */}
      <div className={styles.homeDealsList}>
        <div
         className={`${styles.homeDealsCard} ${styles.comboDealCard}`}
         aria-label="Combo Deals"
        >
          <img
            src={comboDealsImage}
            alt="Combo Deals"
           
             width={1448}
            height={1086}
             loading="lazy"
            decoding="async"
             className={styles.homeDealsImage}
          />
        </div>


        <div
          className={`${styles.homeDealsCard} ${styles.promotionsCard}`}
           aria-label="Promotions"
        >
          <img
            src={promotionsImage}
             alt="Promotions"
            width={1448}
            height={1086}
             loading="lazy"
             decoding="async"
            className={styles.homeDealsImage}
          />

        </div>

        </div>

      </section>
  );
}
