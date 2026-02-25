
import styles from "./Hero.module.css";
import bannerImg from "../../../assets/images/banners/banner.webp";
import LinkButton from "../../../ui/LinkButton/LinkButton"; 

                   
function Hero() {
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
      <LinkButton to="/menu">View Menu</LinkButton>
     <LinkButton to="/order">Order Now</LinkButton>

     </div>

      </div>

      
    </div>
  );
}

export default Hero;
