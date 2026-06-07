import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./BackButton.module.css";

/* Back navigation button */
export function BackButton() {
  
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>

    <span className={styles.icon}> <ArrowLeft size={16} /></span>

      <span>BACK</span>

    </button>
  );
}
