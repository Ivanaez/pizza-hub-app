import styles from "./Button.module.css";

/* Button component props type */
type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

/* Button reusable React component */
export default function Button({
  type = "button",
  variant = "primary",
  onClick,
  className,
  children}: ButtonProps) {

/* Combine base and variant styles */
  const buttonClassName = [
  styles.button,
  styles[variant],
  className
].filter(Boolean).join(" ");

/* Render styled button element */
  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}