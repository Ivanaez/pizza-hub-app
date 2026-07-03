import { Star, Utensils } from "lucide-react";
import { LinkButton } from "@/ui/LinkButton/LinkButton";
import styles from "./HomeActions.module.css";

/* Home actions section */
export function HomeActions() {
  return (
         <section className={styles.homeActions} aria-label="Home actions">

         {/* Action links */}
        <div className={styles.homeActionsList}>
         <LinkButton
           to="/menu"
           variant="secondary"
          className={styles.homeAction}
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
           className={styles.homeAction}
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
       </section>
  );
}
