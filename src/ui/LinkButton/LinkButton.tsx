import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

// Props for LinkButton
type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
   className?: string;
};
// Link button component
 function LinkButton({ to, children, className, variant = "primary" }: LinkButtonProps) {

// Render router link button
  return (

    <Link to={to} className={`${styles.linkButton} ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
    
  );
}

export default LinkButton;