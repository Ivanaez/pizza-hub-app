import styles from "./PizzaList.module.css";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import prosciuttoImg from "../../../assets/images/pizzas/prosciutto.webp"
import ChickenSupremeImg from "../../../assets/images/pizzas/Chicken-Supreme.webp";
import hamMushroomsImg from "../../../assets/images/pizzas/Ham-Mushrooms.webp";
import hawaiianImg from "../../../assets/images/pizzas/Hawaiian.webp";
import pepperoniImg from "../../../assets/images/pizzas/Pepperoni.webp";
import quattroFormaggiImg from "../../../assets/images/pizzas/Quattro-Formaggi.webp";







export function PizzaList() {
  return (
    // popular-wrapper container
    <section className={styles.popularWrapper}>

      {/* popular-text (h2 + p) */}
      <header className={styles.popularText}>

        {/* popular-title */}
        <h2 className={styles.popularTitle}>
          Popular this week
        </h2>

        {/* popular-subtitle */}
        <p className={styles.popularSubtitle}>
          Hand-picked favorites, ready in minutes
        </p>

      </header>

                                   {/* popular pizzas slider */}

        {/* slider left control */}
    <div className={styles.popularSlider}>

  <button className={`${styles.scrollBtn} ${styles.left}`}> ‹ </button>

    {/*Popular pizzas cards wrapper (horizontal scroll container) */}
  <div className={styles.popularCards}>
    
  <PizzaCard
    title="Prosciutto"
    priceFrom={11.30}
    imageSrc={prosciuttoImg}
    imageAlt="Prosciutto Pizza"
    orderHref="/order"
    detailsHref="/details"
  />
  <PizzaCard
  title="Quattro Formaggi"
  priceFrom={9.5}
  imageSrc={quattroFormaggiImg}
  imageAlt="Quattro Formaggi Pizza"
  orderHref="/order"
  detailsHref="/details"
/>

<PizzaCard
  title="Hawaiian"
  priceFrom={10.6}
  imageSrc={hawaiianImg}
  imageAlt="Hawaiian Pizza"
  orderHref="/order"
  detailsHref="/details"
/>

<PizzaCard
  title="Ham & Mushrooms"
  priceFrom={9.70}
  imageSrc={hamMushroomsImg}
  imageAlt="Ham & Mushrooms Pizza"
  orderHref="/order"
  detailsHref="/details"
/>



<PizzaCard
  title="Chicken Supreme"
  priceFrom={10.2}
  imageSrc={ChickenSupremeImg}
  imageAlt="Chicken Supreme Pizza"
  orderHref="/order"
  detailsHref="/details"
/>


<PizzaCard
  title="Pepperoni"
  priceFrom={8.9}
  imageSrc={pepperoniImg}
  imageAlt="Pepperoni Pizza"
  orderHref="/order"
  detailsHref="/details"
/>


  </div>
         {/* slider right control */}
  <button className={`${styles.scrollBtn} ${styles.right}`}> › </button>
</div>



    </section>
  );
}