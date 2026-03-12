import styles from "./Input.module.css";
import type { ChangeEventHandler } from "react";

/* Props for reusable input component */
type InputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
autoComplete?: string;
onChange?: ChangeEventHandler<HTMLInputElement>;
};

/* Reusable input UI component */
const Input = ({ type = "text", placeholder, name,id,autoComplete,onChange }: InputProps) => {

/* Render styled HTML input element */
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      autoComplete={autoComplete}
      onChange = {onChange}
    />
  );
};

export default Input;