import styles from "./CreateAccountPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";



function CreateAccountPage() {

// password state value
const [password, setPassword] = useState("");
// password hint state
const [showPasswordText, setShowPasswordText] = useState(false);
// toggle button - password visibility
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// toggle button - confirm password visibility
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);



// password validation rules
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8 && password.length <= 15;

  // password is valid if all conditions are met
  const isPasswordValid =
  hasUppercase && hasLowercase && hasNumber && hasLength;

  return (
      
    /* Desktop auth card */
    <div className={styles.authCard}>
      {/* Main create account layout */}
      <main className={styles.createAccount}>
       {/* Brand logo image display */}
        <img
          className={styles.logo}
          src={logo}
          alt="PizzaHub logo"
        />
          {/* Page heading section */}   
        <header className={styles.text}>
          <h1>Create your account</h1>
          
        </header>
        {/* Full name input field */}
    <form className={styles.form}>

  {/* Full name */}
  <div className={styles.inputGroup}>
    <label className={styles.visuallyHidden} htmlFor="name">
      Full Name
    </label>

    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
    <i className="fa-regular fa-user"></i>
  </span>

    <Input
      type="text"
      id="name"
      name="name"
      placeholder="Full Name"

    />
  </div>

  {/* Email */}
  <div className={styles.inputGroup}>
    <label className={styles.visuallyHidden} htmlFor="email">
      Email
    </label>

    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
      <i className="fa-regular fa-envelope"></i>
     </span>

    <Input
      type="email"
      autoComplete="email"
      id="email"
      name="email"
      placeholder="Email"
    />
  </div>

  {/* Password */}
  <div className={styles.inputGroup}>
    <label className={styles.visuallyHidden} htmlFor="password">
      Password
    </label>

       <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
     <i className="fa-solid fa-lock"></i>
     
      </span>

    <Input
      type={isPasswordVisible ? "text" : "password"}    // toggle input visibility
      autoComplete="new-password"
      id="password"
      name="password"
      placeholder="Password"

      // show hint on focus
      onFocus={() => setShowPasswordText(true)}
      // hide hint on blur
      onBlur={() => setShowPasswordText(false)}

      // controlled input value
      value={password}
      // update state on typing
      onChange={(e) => setPassword(e.target.value)}
    />
         {/*button show / hide password */} 
     <button
     type="button"
     className={`${styles.inputIcon} ${styles.right}`}
     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
     aria-label="Show password"
       >
        {/* eye / eye-slash icon*/}
      <i
      className={`fa-regular ${isPasswordVisible ? "fa-eye" : "fa-eye-slash" }`}
      
       ></i>
     </button>

  </div>

   {/*show password hint text */}
   {showPasswordText && password && !isPasswordValid &&( 
  <div className={styles.passwordError}>
    <p className={styles.passwordTitle}>
      Password must contain:
    </p>

    {/* password rules status list*/}
    <ul className={styles.passwordRules}>

     {/* check uppercase letter */}
     <li>
  <span className={hasUppercase ? styles.valid : styles.invalid}>
    {hasUppercase ? "✓" : "✗"}
  </span>
  One uppercase letter
</li>
{/* check lowercase letter */}
      <li>
  <span className={hasLowercase ? styles.valid : styles.invalid}>
    {hasLowercase ? "✓" : "✗"}
  </span>
  One lowercase letter
</li>

{/* check number included */}
<li>
  <span className={hasNumber ? styles.valid : styles.invalid}>
    {hasNumber ? "✓" : "✗"}
  </span>
  One number
</li>

{/* check password length */}
<li>
  <span className={hasLength ? styles.valid : styles.invalid}>
    {hasLength ? "✓" : "✗"}
  </span>
  8–15 characters
</li>
      
    </ul>
  </div>
)}

  {/* Confirm password */}
  <div className={styles.inputGroup}>
    <label className={styles.visuallyHidden} htmlFor="confirmPassword">
      Confirm Password
    </label>

     <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
     <i className="fa-solid fa-lock"></i>
      </span>

    <Input
      type={isConfirmPasswordVisible ? "text" : "password"}// toggle input visibility
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
    />
      {/*button show / hide password */} 
      <button
     type="button"
     className={`${styles.inputIcon} ${styles.right}`}
     onClick={() =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible) /* toggle visibility state */
  }
     aria-label="Show confirm password"
       >
          {/* eye / eye-slash icon*/}
      <i
        className={`fa-regular ${isConfirmPasswordVisible ? "fa-eye" : "fa-eye-slash" }`}
          ></i>

     </button>
     

  </div>

  {/* Checkbox */}
  <label className={styles.checkbox}>
    <input type="checkbox" />
    <span>
  I agree to the{" "}
  <Link to="/terms">Terms & Conditions</Link>
</span>
  </label>

  {/* Button */}
  <Button 
    type="submit" 
    variant="primary"
    className={styles.submitButton}>
    Create Account
  </Button>

{/* Login redirect link text */}
<p className={styles.loginText}>
  Already have an account? <Link to="/login">Login</Link>
</p>
</form>

{/* Security info footer text */}
    <p className={styles.securityText}>
  We never share your data • <span> Secure registration </span>
</p>

      </main>
    </div>
   
  );
}


export default CreateAccountPage;