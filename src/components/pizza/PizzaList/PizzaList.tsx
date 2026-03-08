import styles from "./PizzaList.module.css";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import {useRef} from "react";

import prosciuttoImg from "../../../assets/images/pizzas/prosciutto.webp"
import ChickenSupremeImg from "../../../assets/images/pizzas/Chicken-Supreme.webp";
import hamMushroomsImg from "../../../assets/images/pizzas/Ham-Mushrooms.webp";
import hawaiianImg from "../../../assets/images/pizzas/Hawaiian.webp";
import pepperoniImg from "../../../assets/images/pizzas/Pepperoni.webp";
import quattroFormaggiImg from "../../../assets/images/pizzas/Quattro-Formaggi.webp";






// Popular pizzas slider component with horizontal scroll and left/right controls
export function PizzaList() {

// Reference to cards container for button scroll control
const popularCardsRef = useRef<HTMLDivElement | null>(null);

// Horizontal scroll step size
const scrollAmount = 320;

  // Scroll cards to the left
  const scrollLeft = () => {
    popularCardsRef.current?.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  };

  // Scroll cards to the right
  const scrollRight = () => {
    popularCardsRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };


                                  // desktop drag scroll logic for popular pizza cards
 // drag state
const isDownRef = useRef(false);
const startXRef = useRef(0);
const startScrollLeftRef = useRef(0);
const movedRef = useRef(false);

// desktop check
const isDesktop = () => window.innerWidth >= 1024;

// mouse down
const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  const popularCards = popularCardsRef.current;
  if (!popularCards) return;
  if (!isDesktop()) return;
  if (e.button !== 0) return;

  isDownRef.current = true;
  movedRef.current = false;

  startXRef.current = e.pageX;
  startScrollLeftRef.current = popularCards.scrollLeft;

  popularCards.classList.add(styles.dragging);
};
// mouse move
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const popularCards = popularCardsRef.current;
  if (!popularCards) return;
  if (!isDesktop()) return;
  if (!isDownRef.current) return;

  if (e.buttons !== 1) {
    isDownRef.current = false;
    popularCards.classList.remove(styles.dragging);
    return;
  }

  e.preventDefault();

  const dx = e.pageX - startXRef.current;

  if (Math.abs(dx) > 3) {
    movedRef.current = true;
  }

  popularCards.scrollLeft = startScrollLeftRef.current - dx;
};

// stop drag
const stopDragging = () => {
  const popularCards = popularCardsRef.current;
  if (!popularCards) return;

  isDownRef.current = false;
  popularCards.classList.remove(styles.dragging);

  setTimeout(() => {
    movedRef.current = false;
  }, 0);
};





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

  <button className={`${styles.scrollBtn} ${styles.left}`} onClick={scrollLeft}>
  
     ‹ 
     </button>

    {/*Popular pizzas cards wrapper (horizontal scroll container) */}
  <div ref={popularCardsRef} className={styles.popularCards}
    onMouseDown={handleMouseDown}//start dragging
    onMouseMove={handleMouseMove}//drag movement
    onMouseLeave={stopDragging} //stop dragging on mouse leave
    onMouseUp={stopDragging} //stop dragging on mouse up
>

    
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
  <button className={`${styles.scrollBtn} ${styles.right}`}
    onClick={scrollRight}
    >
     › </button>
</div>



    </section>
  );
}