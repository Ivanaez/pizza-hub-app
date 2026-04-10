import styles from "./ForgotPasswordPage.module.css";
import logo from "../../assets/images/logos/logo.png";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPasswordPage = () => {


// // email state input value
const [emailValue, setEmailValue] = useState("");
// email error message
const [emailError, setEmailError] = useState("");
// email regex pattern for validation
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// validate email format
const isEmailValid = emailRegex.test(emailValue.trim());


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();


 let hasError = false;

// (email) validation......................
const trimmedEmail = emailValue.trim();

// empty email check
if (trimmedEmail === "") {
  setEmailError("Email is required");
  hasError = true;
}
// invalid email format
else if (!emailRegex.test(trimmedEmail)) {
  setEmailError("Please enter a valid email");
  hasError = true;
}
// valid email
else {
  setEmailError("");
}
if (hasError) return;



};

  return (
    // Container for the entire forgot password page
    <div className={styles.authCard}>

       {/* Main content area  */} 
      <main className={styles.forgotPasswordContainer}>

          {/* LOGO........  */} 
        <img
          className={styles.logo}
          src={logo}
          alt="PizzaHub logo"
        />
            {/* Header section with title and description */} 
        <header className={styles.forgotPasswordText}>
          <h1>Forgot Password</h1>
          <p>Enter your email to reset your password.</p>
        </header>

           {/* Form for users*/} 
        <form
          className={styles.formForgotPassword}
           noValidate
           onSubmit={handleSubmit}
        >
            {/* Email container............ */} 
          <div className={styles.emailContainer}>
           <div className={styles.emailWrapper}>
             {/*show label if typed */}
            {emailValue.length > 0 && (    
          <label htmlFor="email" className={styles.floatingLabel}>
          Email
           </label>
               )}
            <span
              className={`${styles.inputIcon} ${styles.left}`}
              aria-hidden="true"
            >
              <i className="fa-regular fa-envelope"></i>
            </span>
         
            <Input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              autoComplete="email"
              className={styles.inputEmail}

               value={emailValue}
              onChange={(e) => 
                {setEmailValue(e.target.value);
                 setEmailError("");  // clear error on change

              }}
            />


            {isEmailValid && emailValue.length > 0 && ( // show email valid check
              <span
             className={styles.validIcon} 
               aria-hidden="true"
             >
                ✓
            </span>
            )}
            

          </div>
           {/* render email error message only if exists */}
             {emailError && (
            <p className={styles.errorText} role="alert">
              {emailError}
            </p>
             )}
          </div>


           {/* Button container............ */}
          <div className={styles.resetPasswordButtonContainer}>
            <Button
              type="submit"
              variant="primary"
                className={styles.resetPasswordButton}
               
            >
              Reset Password
            </Button>
          </div>
        </form>
  


         {/* Link for users..........*/}
        <div className={styles.backToSignInContainer}>
          <Link
            className={styles.backToSignIn}
            to="/login"
          >
            Back to Sign In
          </Link>
        </div>
      </main>
    </div>
  );
};
export default ForgotPasswordPage;