import styles from "./ForgotPasswordPage.module.css";
import logo from "@/assets/images/logos/Logo.PNG";
import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

import { Check, Mail } from "lucide-react";

export function ForgotPasswordPage() {


// // email state input value
const [emailValue, setEmailValue] = useState("");
// email error message
const [emailError, setEmailError] = useState("");
// email regex pattern for validation
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// validate email format
const isEmailValid = emailRegex.test(emailValue.trim());
// optional state to show success message after email sent
const [emailSuccess, setEmailSuccess] = useState("");
// state to disable form after submission
const [isSubmitted, setIsSubmitted] = useState(false);




// state to show loading spinner on button during async request
const [isSubmitting, setIsSubmitting] = useState(false);
// function to render button content based on submission state
const submitContent = () => {
  if (isSubmitting) {
    return <span className={styles.spinner}></span>;
  }

  return (
    <>
    Reset Password
    </>
  );
};




const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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


//Backend ................................
//  send reset email request

// clear previous messages
setEmailError("");
setEmailSuccess("");
setIsSubmitted(false);
setIsSubmitting(true);

const { error } = await supabase.auth.resetPasswordForEmail(trimmedEmail, {
  // local reset page url
  redirectTo: "https://pizza-hub-app.vercel.app/reset-password",
});

if (error) {
  // show supabase error text
  setEmailError(error.message);
  return;
} 
// show success message on success
setEmailSuccess("Thank you! If an account with that email exists, we’ve sent a password reset link.");
// disable form after submission
setIsSubmitted(true);
setIsSubmitting(false);
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
              <Mail size={18} />
            </span>
         
            <Input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              autoComplete="email"
              
               className={`${styles.inputEmail} ${emailError ? styles.inputError : ""}`}
               
              disabled={isSubmitted} // disable input after submission
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
                <Check size={20} />
            </span>
            )}
            

          </div>

           {/* render email error message only if exists */}
             {emailError && (
            <p className={styles.errorText} role="alert">
              {emailError}
            </p>
             )}

            {/* render success message */}
               {emailSuccess && (
                 <p className={styles.successText}> {emailSuccess}
             </p>
           )}


          </div>


           {/* Button container............ */}
          <div className={styles.resetPasswordButtonContainer}>
            <Button
              type="submit"
              variant="primary"
                disabled={isSubmitted || isSubmitting} 
                className={styles.resetPasswordButton}
               
            >
              
           {/* change button text based on submission status */}
             {isSubmitted ? "Check your email" : submitContent()} 
        
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
}