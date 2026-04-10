import styles from "./ResetPasswordPage.module.css";
import logo from "../../assets/images/logos/logo.png";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const ResetPasswordPage = () => {
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
        <form className={styles.formResetPassword} noValidate>

            
        {/* New password container........................................ */}
          <div className={styles.newPasswordContainer}>
            <div className={styles.inputGroup}>
     
    <label className={styles.floatingLabel} htmlFor="newPassword">
      New Password
    </label>

    <span className={`${styles.inputIcon} ${styles.inputIconLeft}`}>
      <i className="fa-solid fa-lock"></i>
    </span>

    <Input
      type="password"
      id="newPassword"
      name="newPassword"
      placeholder="New Password"
      autoComplete="new-password"
    />

    {/* toggle new password visibility */}
      <button
         type="button"
           className={`${styles.inputIcon} ${styles.inputIconRight}`}
           aria-label="Show new password"
        >
         <i className="fa-regular fa-eye"></i>
          </button>

  </div>
  </div>




      {/* Confirm password container.................................. */}
          <div className={styles.confirmPasswordContainer}>

           <div className={styles.inputGroup}>
    
    <label className={styles.floatingLabel} htmlFor="confirmPassword">
      Confirm Password
    </label>

    <span className={`${styles.inputIcon} ${styles.inputIconLeft}`}>
      <i className="fa-solid fa-lock"></i>
    </span>

    <Input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
      autoComplete="new-password"
    />

     {/* toggle confirm password visibility */}
    <button
     type="button"
     className={`${styles.inputIcon} ${styles.inputIconRight}`}
      aria-label="Show confirm password"
      >
       <i className="fa-regular fa-eye"></i>
       </button>
      </div>
      </div>


           {/* Save password button ...............................*/}
            <Button
              type="submit"
              variant="primary"
              className={styles.resetPasswordButton}
            >
              Save New Password
            </Button>
          

        </form>



         {/* Back to sign in */}
        <div className={styles.backToSignInContainer}>
          <Link className={styles.backToSignIn} to="/login">
            Back to Sign In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;