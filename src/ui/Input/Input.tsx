import styles from "./Input.module.css";

/* Props for reusable input component */
type InputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
autoComplete?: string;
};

/* Reusable input UI component */
const Input = ({ type = "text", placeholder, name,id,autoComplete }: InputProps) => {

/* Render styled HTML input element */
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      autoComplete={autoComplete}
    />
  );
};

export default Input;