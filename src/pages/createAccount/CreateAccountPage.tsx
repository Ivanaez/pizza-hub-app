import styles from "./CreateAccountPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Check, UserPlus } from "lucide-react";



function CreateAccountPage() {
// name state input value
const [nameValue, setNameValue] = useState("");
// name error message
const [nameError, setNameError] = useState("");
// check valid name input
const isNameValid = nameValue.trim().length > 0 && nameValue.trim().length <= 70;


// email state input value
const [emailValue, setEmailValue] = useState("");
// email error message
const [emailError, setEmailError] = useState("");
// email regex
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// validate email format
const isEmailValid = emailRegex.test(emailValue.trim());




// password state value
const [password, setPassword] = useState("");
// password hint state
const [showPasswordText, setShowPasswordText] = useState(false);
// Confirm-password state value
const [isPasswordTouched, setIsPasswordTouched] = useState(false);
// user started typing password
const [hasPasswordTyped, setHasPasswordTyped] = useState(false);



// confirm password state value
const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
// toggle button - password visibility
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// toggle button - confirm password visibility
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
// confirm password error message
const [confirmPasswordError, setConfirmPasswordError] = useState("");
// check passwords match
const isConfirmPasswordValid =
  confirmPasswordValue === password && confirmPasswordValue.length > 0;


// terms checkbox state
const [isChecked, setIsChecked] = useState(false);
// terms error message
const [termsError, setTermsError] = useState("");



// backend error state..........
const [signUpError, setSignUpError] = useState("");
// backend success state
const [signUpSuccess, setSignUpSuccess] = useState("");




const [isSubmitting, setIsSubmitting] = useState(false);

const submitContent = () => {
  if (isSubmitting) {
    return <span className={styles.spinner}></span>;
  }

  return (
    <>
      <UserPlus size={20} />
      Create Account
    </>
  );
};



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

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  

  let hasError = false;
// trim input spaces
 const trimmedName = nameValue.trim();

// empty name check
  if (trimmedName === "") {
    setNameError("Name is required");
    hasError = true;
    
  }
// max length check
  else if (trimmedName.length > 70) {
    setNameError("Max 70 characters");
    hasError = true;
  }
// valid name
else {
  setNameError("");
}
 
 // (email) validation
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

// (password) validation
if (password.trim() === "") {
  hasError = true;
  setIsPasswordTouched(true); // force show error

  // invalid password rules
} else if (!isPasswordValid) {
  hasError = true;
  setIsPasswordTouched(true);
}


// (confirm password) validation
if (confirmPasswordValue.trim() === "") {
  setConfirmPasswordError("Please confirm your password");
  hasError = true;
// passwords do not match
} else if (confirmPasswordValue !== password) {
  setConfirmPasswordError("Passwords do not match");
  hasError = true;

// passwords match
} else {
  setConfirmPasswordError("");
}

// terms must be accepted
if (!isChecked) {
  setTermsError("You must accept the terms");
  hasError = true;
} else {
  setTermsError("");
}

// stop submit on error
if (hasError) return;

// clear previous backend messages
setSignUpError("");
setSignUpSuccess("");
setIsSubmitting(true);

// send signup request to Supabase (backend)
const { error } = await supabase.auth.signUp({
  email: emailValue,
  password: password,
 options: {
    emailRedirectTo: "https://pizza-hub-app.vercel.app/login",// redirect after email confirmation
     data: {
      name: nameValue,
    },
  },
});
// if backend returns error -> show it
if (error) {
  setSignUpError(error.message);// display backend error message
  return;
}
// success -> tell user to confirm email
setSignUpSuccess("Check your email to confirm your account");
setNameValue("");
setEmailValue("");
setPassword("");
setConfirmPasswordValue("");
setIsSubmitting(false);

};

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
    <form className={styles.form}  onSubmit={handleSubmit} noValidate>

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
     disabled={!!signUpSuccess} // disable input on successful signup
      value={nameValue} // controlled input value
       className={`${styles.input} ${nameError ? styles.inputError : ""}`}

      onChange={(e) => {
        const value = e.target.value;// raw input
        const noNumbersValue = value.replace(/[0-9]/g, "");// remove numbersw
         const onlyLatinValue = noNumbersValue.replace(/[^a-zA-Z\s-']/g, "");// allow only latin + space + - '

      setNameValue(onlyLatinValue);// update input
      }}

     />
     {/* show valid name check */}
{isNameValid && (
  <span className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`} aria-hidden="true">
     <Check size={20} />
  </span>
)}


    </div>

  {/*render error only if exists  */}
    {nameError && (
  <div className={styles.errorText}> {nameError} </div>
     )} 

  {/* Email */}
  <div className={styles.inputGroup}>
   {/*show label if typed */}
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
      autoComplete="email"
      id="email"
      name="email"
      placeholder="Email"
        className={`${styles.input} ${emailError ? styles.inputError : ""}`} 
        disabled={!!signUpSuccess} // disable input on successful signup
      maxLength={254}

      value={emailValue}// controlled input value

      onChange={(e) => {
    const value = e.target.value; // raw input
    setEmailValue(value); // update input while typing

      }}
    />
    
   {isEmailValid && emailValue.length > 0 && ( // show email valid check
  <span
    className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`}
    aria-hidden="true"
  >
     <Check size={20} />
  </span>
   )}

  </div>
  {/* render email error message only if exists */}
{emailError && (
  <div className={styles.errorText}>{emailError}</div>
)}



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
      disabled={!!signUpSuccess} // disable input on successful signup
      name="password"
      placeholder="Password"
        className={`${styles.input} ${ isPasswordTouched && !isPasswordValid ? styles.inputError : ""}`}
     
      // show hint on focus
      onFocus={() => setShowPasswordText(true)}
      // hide hint on blur
      onBlur={() => { setShowPasswordText(false); 
                    }}
       value={password}// controlled input value

      onChange={(e) => {
      setPassword(e.target.value);
      if (e.target.value.length > 0) setHasPasswordTyped(true);
      }}
    />
{/* show valid password check */}
{isPasswordValid && password.length > 0 && (
  <span
    className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`}
    aria-hidden="true"
  >
    <Check size={20} />
  </span>
)}

         {/*button show / hide password */} 
         {password.length > 0 && (
     <button
     type="button"
     className={`${styles.inputIcon} ${styles.right}`}
     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
     onMouseDown={(e) => e.preventDefault()}
      disabled={!!signUpSuccess } 
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
  <p className={styles.errorText}>
    Please enter a valid password
  </p>
)}

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
    {hasUppercase ?  <Check size={15} /> : ""}
  </span>
  One uppercase letter
</li>
{/* check lowercase letter */}
      <li>
  <span className={hasLowercase ? styles.valid : styles.invalid}>
    {hasLowercase ?  <Check size={15} /> : ""}
  </span>
  One lowercase letter
</li>

{/* check number included */}
<li>
  <span className={hasNumber ? styles.valid : styles.invalid}>
    {hasNumber ?  <Check size={15} /> : ""}
  </span>
  One number
</li>

{/* check password length */}
<li>
  <span className={hasLength ? styles.valid : styles.invalid}>
    {hasLength ?  <Check size={15} /> : ""}
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
      autoComplete="new-password"
      disabled={!!signUpSuccess} // disable input on successful signup
        className={`${styles.input} ${confirmPasswordError ? styles.inputError : ""}`}
      value={confirmPasswordValue}// controlled input value
    
      onChange={(e) => setConfirmPasswordValue(e.target.value)}// update state on typing
    />
{/* show confirm password check */}
{isConfirmPasswordValid && (
  <span
    className={`${styles.inputIcon} ${styles.validPosition} ${styles.validIcon}`}
    aria-hidden="true"
  >
    <Check size={20} />
  </span>
)}

      {/*button show / hide password */} 
        {confirmPasswordValue.length > 0 && (
      <button
     type="button"
      disabled={!!signUpSuccess  || isSubmitting} // disable input on successful signup
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

  {confirmPasswordError && (
  <div className={styles.errorText}>
    {confirmPasswordError}
  </div>
    )}

  {/* Checkbox */}
  <label className={styles.checkbox}>

    {/* terms acceptance checkbox */}
    <input type="checkbox" 
    checked={isChecked}// checkbox state
    onChange={(e) => setIsChecked(e.target.checked)}// update state on change
     disabled={!!signUpSuccess} // disable input on successful signup
    />
    <span>
  I agree to the{" "}
  <Link to="/terms">Terms & Conditions</Link>
</span>
  </label>

 {/* terms validation error text*/}
{termsError && (
  <div className={styles.errorText}>
    {termsError}
  </div>
)}

{/* backend error message */}
{signUpError && (
  <div className={styles.signUpError}>
    {signUpError}
  </div>
)}
{/* backend success message */}
{signUpSuccess && (
  <div className={styles.signUpSuccess}>
    {signUpSuccess}
  </div>
)}

  {/* Button */}
  <Button 
    type="submit" 
   disabled={!!signUpSuccess  || isSubmitting} 
    variant="primary"
    className={styles.submitButton}>

    
    {signUpSuccess ? "Check your email" : submitContent()}{/* change button text on success */}
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
