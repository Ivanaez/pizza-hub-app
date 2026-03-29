import styles from "./Input.module.css";
import type { ChangeEventHandler } from "react";

/* Props for reusable input component */
type InputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
autoComplete?: string;
required?: boolean;
value?: string;
 maxLength?: number;
onChange?: ChangeEventHandler<HTMLInputElement>;
onFocus?: React.FocusEventHandler<HTMLInputElement>;
onBlur?: React.FocusEventHandler<HTMLInputElement>;

};

/* Reusable input UI component */
const Input = ({ type = "text", placeholder, name,id,autoComplete,onChange,required,onFocus,onBlur,value,maxLength }: InputProps) => {

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
      required={required}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      maxLength={maxLength}
    />
  );
};

export default Input;