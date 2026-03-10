import styles from "./LoginPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";

const LoginPage = () => {

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
<form className={styles.loginContainer} action="/login" method="post">
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
      type="password"
      name="password"
      placeholder="Password"
      id="password"
      autoComplete="current-password"
    />
                 {/* eye span icon */}
    <button
      type="button"
      className={`${styles.inputIcon} ${styles.right}`}
      aria-label="Show password"
    >
      <i className="fa-regular fa-eye-slash"></i>
    </button>
  </div>
  
{/* Password validation error message */}
<p className={`${styles.error} ${styles.passwordError} ${styles.hidden}`}></p>

{/* Forgot password link */}
<a className={styles.forgotPassword} href="/forgot-password/">
  Forgot password?
</a>



</form>


    </main>

    </div>
  );
};

export default LoginPage;


