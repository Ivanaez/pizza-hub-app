import { Star, Utensils } from "lucide-react";
import heroImage from "@/assets/images/banners/banner.webp";
import { LinkButton } from "@/ui/LinkButton/LinkButton";
import styles from "./HomeHero.module.css";

/* Home hero section */
export function HomeHero() {
  return (
    <section className={styles.homeHero} aria-labelledby="homeHeroTitle">

      {/* Hero image */}
      <img
        src={heroImage}
        alt=""
        width={1536}
        height={1024}
        decoding="async"
        fetchPriority="high"
        className={styles.homeHeroImage}
      />

      {/* Hero content */}
      <div className={styles.homeHeroContent}>
        <h1 id="homeHeroTitle" className={styles.homeHeroTitle}>
          Hot Pizza in 30 Minutes
        </h1>

        {/* Hero actions */}
        <div className={styles.homeHeroActions}>
          <LinkButton
            to="/menu"
            variant="secondary"
            className={styles.homeHeroAction}
          >
            <Utensils
              aria-hidden="true"
              focusable="false"
              size={16}
              strokeWidth={3}
            />
            MENU
          </LinkButton>

          <LinkButton
            to="/best-seller"
            variant="primary"
            className={styles.homeHeroAction}
          >
            <Star
              aria-hidden="true"
              focusable="false"
              size={20}
              strokeWidth={3}
            />
            BEST SELLER
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
