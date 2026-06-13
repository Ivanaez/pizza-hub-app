import { Link } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import styles from "./FeedbackPage.module.css";

// Feedback page
export function FeedbackPage() {
  return (
    // Feedback page container
         <main className={styles.page}>
         {/* Feedback card */}
        <article className={styles.feedbackCard}>
        {/* Feedback title */}
        <h1 className={styles.feedbackTitle}>YOUR FEEDBACK</h1>

        {/* Feedback form */}

        <form className={styles.feedbackForm}>
          {/* Contact fields */}
          <div className={styles.fieldRow}>
            <div className={styles.formField}>
              <label htmlFor="feedbackName">
                Name <span className={styles.requiredMark}>*</span>
              </label>
              <Input
                 id="feedbackName"
                name="name"
                type="text"
                 placeholder="Name"
                autoComplete="name"
                className={styles.feedbackInput}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="feedbackEmail">
                E-mail <span className={styles.requiredMark}>*</span>
              </label>
              <Input
                id="feedbackEmail"
                name="email"
                 type="email"
                placeholder="E-mail"
                 autoComplete="email"
                className={styles.feedbackInput}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="feedbackPhone">
                Mobile phone <span className={styles.requiredMark}>*</span>
              </label>
              <Input
                id="feedbackPhone"
                name="phone"
                 type="tel"
                placeholder="Mobile phone"
                autoComplete="tel"
                className={styles.feedbackInput}
              />
            </div>
          </div>

          {/* Feedback message */}
          <div className={styles.formField}>
            <label htmlFor="feedbackMessage">
              Feedback/Enquiry <span className={styles.requiredMark}>*</span>
            </label>
            <textarea
              id="feedbackMessage"
              name="message"
                placeholder="Feedback/Enquiry"
              className={styles.feedbackTextarea}
            />
          </div>

          {/* Privacy agreement */}
          <label className={styles.privacyAgreement}>
            <input type="checkbox" name="privacyPolicy" />
            <span>
              I have read and agree to the{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </span>
          </label>

          {/* Confirm button */}
          <Button type="button" variant="primary" className={styles.confirmButton}>
            Confirm
          </Button>
        </form>

        </article>


    </main>
  );
}
