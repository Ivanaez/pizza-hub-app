import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";


type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

 function LinkButton({ to, children, variant = "primary" }: LinkButtonProps) {

  return (

    <Link to={to} className={`${styles.linkButton} ${styles[variant]}`}
    >
      {children}
    </Link>
    
  );
}

export default LinkButton;