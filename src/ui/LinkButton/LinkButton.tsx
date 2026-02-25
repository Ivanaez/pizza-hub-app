import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";


type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  
};

 function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link to={to} className={styles.linkButton}>
      {children}
    </Link>
  );
}

export default LinkButton;