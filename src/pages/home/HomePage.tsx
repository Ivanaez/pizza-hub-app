import styles from './HomePage.module.css';
import { Hero } from "@/components/sections/Hero/Hero";
import { ProductCarousel } from "@/components/product/ProductCarousel/ProductCarousel";
import { UserGreeting } from "@/components/user/UserGreeting";

export function HomePage() {
  return (
    
  //  Controls homepage layout and styling
    <main className={styles.page}>
     
      <Hero />
      <ProductCarousel />
      <UserGreeting />
    </main>
  );
}