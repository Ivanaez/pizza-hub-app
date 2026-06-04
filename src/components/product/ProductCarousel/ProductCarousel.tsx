import styles from "./ProductCarousel.module.css";
import { ProductCard } from "@/components/product/ProductCard/ProductCard";
import {useRef,useState,useEffect} from "react";
import { supabase } from "@/lib/supabase";




export function ProductCarousel() {

  // products state from backend
const [products, setProducts] = useState<any[]>([]);
 // fetch data on mount
  useEffect(() => {

 // async fetch function to get products from supabase backend
    const fetchProducts = async () => {
 // request data from Supabase
      const { data, error } = await supabase
        .from("products")     // target products table
        .select("*")      // select all columns
        .eq("is_popular", true);// filter for popular products only
     // handle request error
      if (error) {
        console.error(error);
        return;
      }
      
      // update products state
      setProducts(data);
    };

    fetchProducts();
  }, []);


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

    
  
{/* Render products dynamically from backend */}
{products.map((product) => (
  <ProductCard
    key={product.id}
    id={product.id}
    title={product.name}
    priceFrom={product.price}
    imageSrc={product.image_url}
    imageAlt={product.name}
    
    
  />
))}

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