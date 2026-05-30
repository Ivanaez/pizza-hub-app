import styles from './HomePage.module.css';
import { Hero } from "@/components/sections/Hero/Hero";
import { PizzaList } from "@/components/product/ProductCarosel/ProductCarosel";
import { UserGreeting } from "@/components/user/UserGreeting";

export function HomePage() {
  return (
    
  //  Controls homepage layout and styling
    <main className={styles.page}>
     
      <Hero />
      <PizzaList />
      <UserGreeting />
    </main>
  );
}