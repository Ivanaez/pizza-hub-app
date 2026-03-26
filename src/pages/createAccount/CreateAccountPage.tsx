import styles from "./CreateAccountPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";



function CreateAccountPage() {
// name state input value
const [nameValue, setNameValue] = useState("");

// name error message
const [nameError, setNameError] = useState("");

// email state input value
const [emailValue, setEmailValue] = useState("");


// password state value
const [password, setPassword] = useState("");
// password hint state
const [showPasswordText, setShowPasswordText] = useState(false);
// Confirm-password state value
const [isPasswordTouched, setIsPasswordTouched] = useState(false);

const [hasPasswordTyped, setHasPasswordTyped] = useState(false);



const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
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

  const isPasswordError =
  isPasswordTouched && hasPasswordTyped && !isPasswordValid;
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
        {/*  name input field */}
    <form className={styles.form}>

  {/*  name */}
  <div className={styles.inputGroup}>

    {nameValue.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="name">
       Name*
    </label>
     )}
    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
    <i className="fa-regular fa-user"></i>
  </span>

    <Input
      type="text"
      id="name"
      name="name"
      placeholder="Name"

      value={nameValue} // controlled input value

      onChange={(e) => {
        const value = e.target.value;// raw input
        const noNumbersValue = value.replace(/[0-9]/g, "");// remove numbers
         const onlyLatinValue = noNumbersValue.replace(/[^a-zA-Z\s-']/g, "");// allow only latin + space + - '


         // max length validation
      if (onlyLatinValue.length > 70) {
      setNameError("Max 70 characters");// set error
      } else {
      setNameError("");// clear error
      setNameValue(onlyLatinValue);// update input
      }
      
      }}

     />

     {/*render error only if exists  */}
    {nameError && (
  <div className="nameError"> {nameError} </div>
     )}

    
  </div>

  {/* Email */}
  <div className={styles.inputGroup}>
    {emailValue.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="email">
      Email*
    </label>
     )}
    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
      <i className="fa-regular fa-envelope"></i>
     </span>

    <Input
      type="email"
      autoComplete="off"
      id="email"
      name="email"
      placeholder="Email"

      value={emailValue}// controlled input value
      onChange={(e) => setEmailValue(e.target.value)}// update state on typing


    />
  </div>

  {/* Password */}
<div
  className={`
  ${styles.inputGroup}
  ${isPasswordError ? styles.inputGroupError : ""}
 
`}
>
    {password.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="password">
      Password*
    </label>
    )}
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
      onBlur={() => { setShowPasswordText(false); 
                     setIsPasswordTouched(true); }}
       value={password}// controlled input value

      onChange={(e) => {
      setPassword(e.target.value);
      if (e.target.value.length > 0) setHasPasswordTyped(true);
      }}
    />
         {/*button show / hide password */} 
         {password.length > 0 && (
     <button
     type="button"
     className={`${styles.inputIcon} ${styles.right}`}
     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
     onMouseDown={(e) => e.preventDefault()}
     aria-label="Show password"
       >
        {/* eye / eye-slash icon*/}
      <i
      className={`fa-regular ${isPasswordVisible ? "fa-eye" : "fa-eye-slash" }`}

       ></i>
     </button>
     )}

  </div>

{/* password error message*/}
{isPasswordTouched && !isPasswordValid && (
  <p className={styles.passwordErrorText}>
    Please enter a valid password
  </p>
)}

   {/*show password hint text */}
   {showPasswordText && password && !isPasswordValid &&( 
  <div className={styles.passwordError}>

    <p className={styles.passwordTitle}>
      Password must contain
    </p>

    {/* password rules status list*/}
    <ul className={styles.passwordRules}>

     {/* check uppercase letter */}
     <li>
  <span className={hasUppercase ? styles.valid : styles.invalid}>
    {hasUppercase ? "✓" : ""}
  </span>
  One uppercase letter
</li>
{/* check lowercase letter */}
      <li>
  <span className={hasLowercase ? styles.valid : styles.invalid}>
    {hasLowercase ? "✓" : ""}
  </span>
  One lowercase letter
</li>

{/* check number included */}
<li>
  <span className={hasNumber ? styles.valid : styles.invalid}>
    {hasNumber ? "✓" : ""}
  </span>
  One number
</li>

{/* check password length */}
<li>
  <span className={hasLength ? styles.valid : styles.invalid}>
    {hasLength ? "✓" : ""}
  </span>
  8–15 characters
</li>
      
    </ul>
  </div>
)}

  {/* Confirm password */}
  <div className={styles.inputGroup}>

    {confirmPasswordValue.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="confirmPassword">
      Confirm Password*
    </label>
   )}
     <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
     <i className="fa-solid fa-lock"></i>
      </span>

    <Input
      type={isConfirmPasswordVisible ? "text" : "password"}// toggle input visibility
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"

      value={confirmPasswordValue}// controlled input value
    
      onChange={(e) => setConfirmPasswordValue(e.target.value)}// update state on typing
    />
      {/*button show / hide password */} 
        {confirmPasswordValue.length > 0 && (
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
      )}
     

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