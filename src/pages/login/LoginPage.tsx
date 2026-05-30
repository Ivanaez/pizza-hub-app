import styles from "./LoginPage.module.css";
import logo from "@/assets/images/logos/Logo.PNG";
import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import LinkButton from "@/ui/LinkButton/LinkButton";
import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Check, LogIn, User, UserPlus } from "lucide-react";
import { useUser } from "@/features/user/UserContext";


const LoginPage = () => {

  const { login } = useUser();
  
/* Password state *****************/
const [passwordValue, setPasswordValue] = useState("");
/* show password eye icon */
const showPasswordToggle = passwordValue.length > 0;
/* password visibility state **************************/
const [showPassword, setShowPassword] = useState(false);
// password error visibility state
const [showPasswordError, setShowPasswordError] = useState(false);


/* Email state ***************/
const [emailValue, setEmailValue] = useState("");
// email regex
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// email error message
const [emailError, setEmailError] = useState(""); 
// check email format
const isEmailValid = emailRegex.test(emailValue.trim());



// submission state for loading spinner
const [isSubmitting, setIsSubmitting] = useState(false);
// login button content: spinner or text
const loginContent = () => {
  if (isSubmitting) {
    return <span className={styles.spinner}></span>
  }

  return (
    <>
      <LogIn size={20} />
      Login
    </>
  )
}


// backend login error.............
const [loginError, setLoginError] = useState("");
// navigation hook
const navigate = useNavigate();



// password validation logic
const validatePassword = (password: string) => {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8 && password.length <= 15;

  return hasLowercase && hasUppercase && hasNumber && hasLength;
};
const isPasswordValid = validatePassword(passwordValue); // check password format



// login form submit handler..................................
const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();


  let hasError = false; // track errors
  const trimmedEmail = emailValue.trim(); // clean input


  // email validation.......
  if (trimmedEmail === "") {
  setEmailError("Email is required"); // empty email
  hasError = true;
}
else if (!emailRegex.test(trimmedEmail)) {
  setEmailError("Invalid email format"); // invalid format
  hasError = true;
}
else{
setEmailError(""); // clear error
}

// password validation............

  if (passwordValue.trim() === "") {
  setShowPasswordError(true); // empty password
  hasError = true;
} else if (!isPasswordValid) {
  setShowPasswordError(true); // invalid format
  hasError = true;
} else {
  setShowPasswordError(false); // clear error
}
   if (hasError) return;// stop if has error
 
// clear backend error
setLoginError("");
setIsSubmitting(true); // start spinner

// send login request to backend (Supabase auth)
const { data,error } = await supabase.auth.signInWithPassword({
  email: trimmedEmail,
  password: passwordValue,
});
// check backend response
if (error) {
  setLoginError("Invalid email or password")
  setIsSubmitting(false) // stop spinner on error
} else {
  console.log(data.user)
  login(data.user?.user_metadata?.name ?? "User");

    setIsSubmitting(false); // stop spinner on success
    navigate("/")
 
}


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
            Join us and make your next order easier
        </p>
        
      </header>

{/* Login form container */}
<form className={styles.loginContainer} onSubmit={handleLogin} noValidate>


                          {/* Email input */}
  <div className={styles.email}>
                        {/* email label-floating */}
          {emailValue.length > 0 && (   // show label if typing           
    <label className={styles.floatingLabel} htmlFor="email">
      Email
    </label>
    )}
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
        className={`${styles.input} ${emailError ? styles.inputError : ""}`}

      onChange={(e) => {
  const value = e.target.value; // raw input value
  setEmailValue(value); // update input state

      }}
    />
    {/* show valid email check */}
    {isEmailValid && emailValue.length > 0 && (
  <span className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`} aria-hidden="true">
    <Check size={20} />
  </span>
   )}

  </div>
  {/* show email error message */}
{emailError && (
  <div className={styles.errorText}>
    {emailError} {/* show email error */}
  </div>
)}

                 {/* Password input */}
  <div className={styles.password}>
                               {/* password label-floating */}
      {passwordValue.length > 0 && (    // show label if typing     
    <label className={styles.floatingLabel} htmlFor="password">
      Password
    </label>
    )}
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
      className={`${styles.input} ${showPasswordError ? styles.inputError : ""}`}
      
      onChange={(e) => {setPasswordValue(e.target.value); // update input state
       setShowPasswordError(false);// reset error state
      }}
    />
    {/*  show valid password check  */}
    {  isPasswordValid && passwordValue.length > 0 && (
  <span className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`} aria-hidden="true">
    <Check size={20} />
  </span>
)}
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
    <li>* One uppercase letter</li>
    <li>* One lowercase letter</li>
    <li>* One number</li>
    <li>* 8–15 characters</li>
  </ul>
</div>

{/* backend error message */}
   {loginError && (
  <div className={styles.errorTextLogin}>
    {loginError}
  </div>
  )}

{/* Forgot password link */}
<Link className={styles.forgotPassword} to="/forgot-password">
  Forgot password?
</Link>

{/* Button login */}
<div className={styles.loginButton}>
<Button 
   type="submit" 
   variant="primary" 
   className={styles.loginPageButton} 
     disabled={isSubmitting} /* disable while submitting */
   >
  {loginContent()} {/* show spinner or text */}
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
    <UserPlus size={20} />
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
    to="/"
    variant="secondary"
    className={styles.guestButton}
  >
    <User size={20} />
    Continue as Guest
  </LinkButton>
</div>
</div>

{/* Security and privacy info */}
<p className={styles.securityText}>
  We never share your data · <span>Secure login</span>
</p>

</main>

    </div>
  );
};

export default LoginPage;


