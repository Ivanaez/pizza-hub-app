import styles from "./CreateAccountPage.module.css";
import logo from "../../assets/images/logos/Logo.PNG";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";

function CreateAccountPage() {
  return (
// Main page container wrapper
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
      type="password"
      id="password"
      name="password"
      placeholder="Password"
    />
  </div>

  {/* Confirm password */}
  <div className={styles.inputGroup}>
    <label className={styles.visuallyHidden} htmlFor="confirmPassword">
      Confirm Password
    </label>

     <span className={`${styles.inputIcon} ${styles.left}`} aria-hidden="true">
     <i className="fa-solid fa-lock"></i>
      </span>

    <Input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
    />
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

{/* Security info footer text */}
</form>
    <p className={styles.securityText}>
  We never share your data • <span> Secure registration </span>
</p>

      </main>
    </div>
  );
}

export default CreateAccountPage;