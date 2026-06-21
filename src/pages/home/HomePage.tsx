import styles from "./HomePage.module.css";
import { HomeHero } from "@/components/home/HomeHero/HomeHero";
import { HomeDeals } from "@/components/home/HomeDeals/HomeDeals";
import { ProductCarousel } from "@/components/product/ProductCarousel/ProductCarousel";
import { UserGreeting } from "@/components/user/UserGreeting";

// Home page
export function HomePage() {
  return (
    <main className={styles.page}>
      {/* Home hero */}
      <HomeHero />

    
      {/* Popular products */}
      <ProductCarousel />


     {/* Home deals */}
      <HomeDeals />

      {/* User greeting */}
      <UserGreeting />
    </main>
  );
}
