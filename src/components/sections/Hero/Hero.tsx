
import styles from "./Hero.module.css";
import bannerImg from "@/assets/images/banners/banner.webp";
import { LinkButton } from "@/ui/LinkButton/LinkButton"; 
import { Star, Utensils } from "lucide-react";


                   
export function Hero() {
  return (
/* Hero main wrapper */
    <div className={styles.bannerWrap}>

      {/* Hero background image */}
      <img
        src={bannerImg}
        alt="Banner image"
        className={styles.bannerImage}
      />
          {/* Hero overlay text content */}
      <div className={styles.bannerText}>
        <h1>Hot Pizza in 30 Minutes</h1>

      {/* Hero action buttons */}
     <div className={styles.bannerButtons}>

      <LinkButton 
      to="/menu" 
      variant="secondary">

        <Utensils size={16} />
        MENU
        
        </LinkButton>


     <LinkButton
      to="/best-seller"
       variant="primary">

         <Star size={20} />
        BEST SELLER

        </LinkButton>

       
     </div>

      </div>

      
    </div>
  );
}
