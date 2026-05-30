import styles from "./ResetPasswordPage.module.css";
import logo from "@/assets/images/logos/Logo.PNG";
import { Link } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const ResetPasswordPage = () => {

// password state input value
const [passwordValue, setPasswordValue] = useState("");
// toggle button - password visibility
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// password error message state
const [passwordError, setPasswordError] = useState("");
// show/hide password hint text (on typing / blur)
const [showPasswordText, setShowPasswordText] = useState(false);
// indicates if password rules should be highlighted as error (on submit)



// confirm password state value
const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
// toggle button - confirm password visibility
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// confirm password error message state
const [confirmPasswordError, setConfirmPasswordError] = useState("");



// password success message state
const [passwordSuccess, setPasswordSuccess] = useState("");
// disable form after successful password reset
const [isSubmitted, setIsSubmitted] = useState(false);





// password submit validation logic
const validatePassword = (password: string) => {

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8 && password.length <= 15;

  return hasLowercase && hasUppercase && hasNumber && hasLength
};
// check password rules status for hint text
const hasLowercase = /[a-z]/.test(passwordValue);
const hasUppercase = /[A-Z]/.test(passwordValue);
const hasNumber = /[0-9]/.test(passwordValue);
const hasLength = passwordValue.length >= 8 && passwordValue.length <= 15;





// check password format
const isPasswordValid = validatePassword(passwordValue); 
// check  confirm password format

// remove spaces from password
 const trimmedPassword = passwordValue.trim();
// remove spaces from confirm input
 const trimmedConfirmPassword = confirmPasswordValue.trim();

// validate confirm password: input + match + valid password
 const isConfirmPasswordValid =
  trimmedConfirmPassword.length > 0 && // has user input
  trimmedConfirmPassword === trimmedPassword &&  // passwords match exactly
  isPasswordValid;// password passes validation rules





// form submission handler
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  let hasError = false;
 


  // password validation..............
  if (trimmedPassword === "") {
    setPasswordError("New password is required");
    setShowPasswordText(true); 
    hasError = true;
  } else if (!validatePassword(trimmedPassword)) {
    setPasswordError("Please enter a valid password");
    setShowPasswordText(true);
    hasError = true;
  } else {
    setPasswordError("");
  }
 

// confirm password validation
if (trimmedConfirmPassword === "") {
  setConfirmPasswordError("Confirm password is required");
  hasError = true;
} else if (trimmedConfirmPassword !== trimmedPassword) {
  setConfirmPasswordError("Passwords do not match");
  hasError = true;
} else {
  setConfirmPasswordError("");
}

  if (hasError) return;// stop form submission if there are validation errors
  
  
 
// backend: update password......................................
setPasswordError("");// clear backend error before submission


const { error } = await supabase.auth.updateUser({// update user password using Supabase auth
  password: trimmedPassword,
});

// check backend response for errors
if (error) {
  setPasswordError(error.message);
  return;
}

// success message
setPasswordSuccess("Thank you! Your password has been reset successfully. You can now log in with your new password.");
setIsSubmitted(true);// disable form after successful submission
setPasswordValue(""); // clear password input
setConfirmPasswordValue("");// clear confirm password input

}


  return (
  // Auth card wrapper
    <div className={styles.authCard}>

      {/* Main reset container */}
      <main className={styles.resetPasswordContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt="PizzaHub logo"
        />
         {/* Header title section */}
        <header className={styles.resetPasswordText}>
          <h1>Reset Password</h1>
          <p>Enter your new password below.</p>
        </header>

         {/* Reset password form */}
        <form className={styles.formResetPassword}
        onSubmit={handleSubmit}
        noValidate>

            
        {/* New password container........................................ */}
          <div className={styles.newPasswordContainer}>
            <div className={styles.inputGroup}>
      {passwordValue.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="newPassword">
      New Password
    </label>
      )}
    <span className={`${styles.inputIcon} ${styles.inputIconLeft}`}>
      <i className="fa-solid fa-lock"></i>
    </span>

    <Input
      type={isPasswordVisible ? "text" : "password"}// toggle input type based on visibility state
      id="newPassword"
      name="newPassword"
      placeholder="New Password"
      autoComplete="new-password"
      className={styles.inputSuccess}// adds space for check icon
      disabled={isSubmitted}// disable input after successful submission
      
      onBlur={() => setShowPasswordText(false)}// hide password hint text when user leaves the password input field
      value={passwordValue}// controlled input value
      onChange={(e) => 
        {
              
           const value = e.target.value;
          setPasswordValue(value) ; // update state on input change
          setPasswordError(""); // clear password error when user starts typing confirm password
          setShowPasswordText(value.length > 0); // show password hint text when user starts typing password
      }}


    />
      {/* show check icon if password is valid and has input value */}
{isPasswordValid && passwordValue.length > 0 && (
   <span className={`${styles.inputIcon}  ${styles.validCheckIcon}`} aria-hidden="true">
    ✓
  </span>
)}
    {/* toggle new password visibility */}
      <button
         type="button"
           className={`${styles.inputIcon} ${styles.inputIconRight}`}
           onClick={() => setIsPasswordVisible(!isPasswordVisible)}
           onMouseDown={(e) => e.preventDefault()} // prevent focus loss on button click
           aria-label="Show new password"
           disabled={isSubmitted}// disable button after successful submission
        >
        <i
    className={`fa-regular ${
      isPasswordVisible ? "fa-eye" : "fa-eye-slash" // toggle icon based on visibility state
    }`}
  />
          </button>

{/* password error message */} 
  </div> 
   {passwordError && (
  <p className={styles.errorText}> {passwordError} </p>
)}

{showPasswordText && !validatePassword(passwordValue) && (

<div className={styles.passwordError}>

{/* password section title */}
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
  </div>



      {/* Confirm password container.................................. */}
          <div className={styles.confirmPasswordContainer}>

           <div className={styles.inputGroup}>

    {confirmPasswordValue.length > 0 && (
    <label className={styles.floatingLabel} htmlFor="confirmPassword">
      Confirm Password
    </label>
     )}
    <span className={`${styles.inputIcon} ${styles.inputIconLeft}`}>
      <i className="fa-solid fa-lock"></i>
    </span>

    <Input
      type={isConfirmPasswordVisible ? "text" : "password"}// toggle input type based on visibility state
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
      autoComplete="new-password"
      className={styles.inputSuccess}// adds space for check icon
      disabled={isSubmitted}// disable input after successful submission
       value={confirmPasswordValue}// controlled input value
      onChange={(e) => 
        {
          setConfirmPasswordValue(e.target.value);// update state on input change
        setConfirmPasswordError(""); // clear confirm password error when user starts typing confirm password
      }} 
      
    />
    {/* show check icon if confirm password is valid and has input value */}
{  isConfirmPasswordValid &&  (
  <span className={`${styles.inputIcon}  ${styles.validCheckIcon}`} aria-hidden="true">
    ✓
  </span>
)}


     {/* toggle confirm password visibility */}
    <button
     type="button"
     className={`${styles.inputIcon} ${styles.inputIconRight}`}
      onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
      aria-label="Show confirm password"
       disabled={isSubmitted}// disable button after successful submission
      >
      <i
      
    className={`fa-regular ${
      isConfirmPasswordVisible ? "fa-eye" : "fa-eye-slash" // toggle icon based on visibility state
    }`}
    
  />
       </button>
       </div>


       {/* confirm password error message (shown only when validation fails) */}
       {confirmPasswordError && (
    <p className={styles.errorText}> {confirmPasswordError}</p>
      )}

     {/* success message after successful password reset */}
     {passwordSuccess && (
        <p className={styles.successText}> {passwordSuccess} </p>
       )}
        {/* redirect login link after successful submission */}
      {isSubmitted && (
  <Link to="/login" className={styles.loginRedirectLink}>
    Go to login
  </Link>
)}




      </div>


           {/* Save password button ...............................*/}
            <Button
              type="submit"
              variant="primary"
              className={styles.resetPasswordButton}
              disabled={isSubmitted}// disable button after successful submission

            >
               {isSubmitted ? "Saved successfully" : "Save New Password"} {/*toggle button text after successful submission */}
            </Button>
          

        </form>

      </main>
    </div>
  );
};

export default ResetPasswordPage;