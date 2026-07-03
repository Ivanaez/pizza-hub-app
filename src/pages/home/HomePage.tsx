import styles from "./HomePage.module.css";
import { HomeActions } from "@/components/home/HomeActions/HomeActions";
import { HomeDeals } from "@/components/home/HomeDeals/HomeDeals";
import { ProductCarousel } from "@/components/product/ProductCarousel/ProductCarousel";
import { UserGreeting } from "@/components/user/UserGreeting";

// Home page
export function HomePage() {
  return (
    <main className={styles.page}>
      
      {/* Popular products */}
      <ProductCarousel />

      {/* Home actions */}
      <HomeActions />

     {/* Home deals */}
      <HomeDeals />

      {/* User greeting */}
      <UserGreeting />
    </main>
  );
}
