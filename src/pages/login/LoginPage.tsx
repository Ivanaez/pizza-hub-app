import styles from "./LoginPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import LinkButton from "../../ui/LinkButton/LinkButton";
import { useState } from "react";
import type { FormEvent } from "react";


const LoginPage = () => {

/* Password state */
const [passwordValue, setPasswordValue] = useState("");
/* Password input state */
const isLoginDisabled =
  passwordValue.length > 0 && passwordValue.length < 8;
/* show password eye icon */
const showPasswordToggle = passwordValue.length > 0;

/* password visibility state **************************/
const [showPassword, setShowPassword] = useState(false);

// password error visibility state
const [showPasswordError, setShowPasswordError] = useState(false);

// password validation logic
const validatePassword = (password: string) => {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8 && password.length <= 15;

  return hasLowercase && hasUppercase && hasNumber && hasLength;
};
// login form submit handler
const handleLogin = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const isPasswordValid = validatePassword(passwordValue);

  if (!isPasswordValid) {
    setShowPasswordError(true);
    return;
  }

  setShowPasswordError(false);
  console.log("Login success");// login success message
};



  return (
                /* Auth card wrapper (styled in desktop breakpoint) */
     <div className={styles.authCard}>

      {/* Main login page container */}
    <main className={styles.login}>

   {/* Brand logo displayed at top of login page */}
    <img 
    className={styles.logo} 
    src={logo} 
    alt="PizzaHub logo"
    />

      {/* Text block containing login heading and subtitle */}
      <header className={styles.loginText}>

         {/* Primary page heading for login section */}
        <h1>Sign in</h1>

         {/* Short description encouraging user to sign in */}
        <p> 
            Join us and make your next order easier.
        </p>
        
      </header>

{/* Login form container */}
<form className={styles.loginContainer} onSubmit={handleLogin}>
                          {/* Email input */}
  <div className={styles.email}>
                        {/* email label (hidden) */}
    <label className={styles.visuallyHidden} htmlFor="email">
      Email
    </label>
                           {/* email span icon */}      
    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
      <i className="fa-regular fa-envelope"></i>
    </span>
         {/*  email input field */}
    <Input
      type="email"
      name="email"
      placeholder="Email"
      id="email"
      autoComplete="email"
      required /* required field */
    />
  </div>
                 {/* Password input */}
  <div className={styles.password}>
                               {/* password label (hidden) */}
    <label className={styles.visuallyHidden} htmlFor="password">
      Password
    </label>
                          {/* lock span icon */}
    <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
      <i className="fa-solid fa-lock"></i>
    </span>

       {/* password input field */}
    <Input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Password"
      id="password"
      autoComplete="current-password"
      onChange={(e) => {setPasswordValue(e.target.value);
       setShowPasswordError(false);
      }}
    />
                 {/* eye span icon */}
       {showPasswordToggle && (            /* conditional eye icon */  
    <button
      type="button"
      className={`${styles.inputIcon} ${styles.right}`}
      aria-label="Show password"
      onClick={() => setShowPassword(!showPassword)} /* toggle password visibility */
    >
      {/* Toggle password visibility icon */}
      <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
    </button>
)}

  </div>
  
{/* Password validation error message */}
<div
  className={`${styles.passwordError} 
    ${!showPasswordError ? styles.passwordHidden : ""}`}

>

  <p  className={styles.passwordTitle}>
    Password must contain:</p>

  <ul className={styles.passwordRules} >
    <li>✓ One uppercase letter</li>
    <li>✓ One lowercase letter</li>
    <li>✓ One number</li>
    <li>✓ 8–15 characters</li>
  </ul>
</div>

{/* Forgot password link */}
<a className={styles.forgotPassword} href="/forgot-password/">
  Forgot password?
</a>

{/* Button login */}
<div className={styles.loginButton}>
<Button 
   type="submit" 
   variant="primary" 
   className={styles.loginPageButton} 
    disabled={isLoginDisabled}
   >
   
    Login
</Button>
</div>
</form>

{/* Secondary section */}
<div className={styles.secondary}>

  {/* New here text */}
  <p className={styles.newHere}>
    <span>New here?</span>
  </p>

{/* Link button - Create account */}
<div className={styles.accountButtonBox}>
  <LinkButton
    to="/create-account"
    variant="secondary"
    className={styles.createAccount}
  >
    Create Account
  </LinkButton>
</div>

{/* Divider between account creation and guest access */}
<div className={styles.orDivider}>
  <span>Or</span>
</div>

{/* Link button - Guest */}
<div className={styles.accountButtonBox}>
  <LinkButton
    to="/guest"
    variant="secondary"
    className={styles.guestButton}
  >
    Continue as Guest
  </LinkButton>
</div>

{/* Security and privacy info */}
<p className={styles.securityText}>
  We never share your data · <span>Secure login</span>
</p>



</div>






    </main>

    </div>
  );
};

export default LoginPage;


