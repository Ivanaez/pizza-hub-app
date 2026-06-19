import { FeedbackForm } from "@/components/feedback/FeedbackForm/FeedbackForm";
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
        <FeedbackForm />

        </article>


    </main>
  );
}
