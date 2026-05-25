import styles from "./CategoryCard.module.css";
import { NavLink } from "react-router-dom";

// Category card component props
type CategoryCardProps = {
  title: string;
  image: string;
  to:string;
};

// Single category navigation card
export function CategoryCard({ title,image,to }: CategoryCardProps) {
  return (
     // Clickable category card
      <NavLink to={to} 
      className={({ isActive }) => `${styles.card} ${isActive ? styles.active : ""}`}
       type="button">
     {/* Category preview image */}
      <img
        className={styles.image}
        src={image}
        alt={title}
      />
     {/* Category title text */}
      <span className={styles.title}>{title}</span>
    </NavLink>
    
  );
}