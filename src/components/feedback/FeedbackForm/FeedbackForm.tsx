import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { BackButton } from "@/components/navigation/BackButton/BackButton";
import { submitFeedbackMessage } from "@/features/feedback/feedback.api";
import type {
  FeedbackFieldErrors,
  FeedbackFormValues,
  FeedbackSubmitPayload,
} from "@/features/feedback/feedback.types";
import {
  hasFeedbackValidationErrors,
  validateFeedbackForm,
} from "@/features/feedback/feedback.validation";
import styles from "./FeedbackForm.module.css";



const initialFeedbackValues: FeedbackFormValues = {
  name: "",
  email: "",
  mobilePhone: "",
  message: "",
  privacyPolicyAccepted: false,
};

// Feedback form component
export function FeedbackForm() {
  const [formValues, setFormValues] = useState<FeedbackFormValues>(initialFeedbackValues);
  const [fieldErrors, setFieldErrors] = useState<FeedbackFieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isFeedbackSubmitted = !!submitSuccess;

  // Update text fields
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FeedbackFormValues;
    const fieldValue = fieldName === "mobilePhone" ? value.replace(/\D/g, "") : value;

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
    setFieldErrors((currentErrors) => ({ ...currentErrors, [fieldName]: "" }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  // Update message field
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      message: event.target.value,
    }));
    setFieldErrors((currentErrors) => ({ ...currentErrors, message: "" }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  // Update privacy checkbox
  const handlePrivacyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      privacyPolicyAccepted: event.target.checked,
    }));
    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      privacyPolicyAccepted: "",
    }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  // Submit feedback form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateFeedbackForm(formValues);
    setFieldErrors(validationErrors);

    if (hasFeedbackValidationErrors(validationErrors) || isSubmitting || isFeedbackSubmitted) {
      return;
    }

    const payload: FeedbackSubmitPayload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      mobilePhone: formValues.mobilePhone.trim(),
      message: formValues.message.trim(),
      privacyPolicyAccepted: true,
    };

    setSubmitError("");
    setSubmitSuccess("");
    setIsSubmitting(true);

    const result = await submitFeedbackMessage(payload);

    if (!result.success) {
      setSubmitError(result.errorMessage);
      setIsSubmitting(false);
      return;
    }

    setSubmitSuccess("Thank you! Your feedback has been sent.");
    setIsSubmitting(false);
  };

  const submitContent = isSubmitting ? (
    <span className={styles.spinner}></span>
  ) : (
    "Confirm"
  );

  return (
    // Feedback form
    <form className={styles.feedbackForm} onSubmit={handleSubmit} noValidate>
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
            value={formValues.name}
            onChange={handleInputChange}
            disabled={isFeedbackSubmitted}
            className={`${styles.feedbackInput} ${fieldErrors.name ? styles.inputError : ""}`}
          />
          {fieldErrors.name && (
            <p className={styles.errorMessage}>{fieldErrors.name}</p>
          )}
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
            value={formValues.email}
            onChange={handleInputChange}
            disabled={isFeedbackSubmitted}
            className={`${styles.feedbackInput} ${fieldErrors.email ? styles.inputError : ""}`}
          />
          {fieldErrors.email && (
            <p className={styles.errorMessage}>{fieldErrors.email}</p>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="feedbackPhone">
            Mobile phone <span className={styles.requiredMark}>*</span>
          </label>
          <Input
            id="feedbackPhone"
            name="mobilePhone"
            type="tel"
            placeholder="Mobile phone"
            autoComplete="tel"
            value={formValues.mobilePhone}
            onChange={handleInputChange}
            disabled={isFeedbackSubmitted}
            className={`${styles.feedbackInput} ${fieldErrors.mobilePhone ? styles.inputError : ""}`}
          />
          {fieldErrors.mobilePhone && (
            <p className={styles.errorMessage}>{fieldErrors.mobilePhone}</p>
          )}
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
          value={formValues.message}
          onChange={handleMessageChange}
          disabled={isFeedbackSubmitted}
          className={`${styles.feedbackTextarea} ${fieldErrors.message ? styles.inputError : ""}`}
        />
        {fieldErrors.message && (
          <p className={styles.errorMessage}>{fieldErrors.message}</p>
        )}
      </div>

      {/* Privacy agreement */}
      <label className={styles.privacyAgreement}>
        <input
          type="checkbox"
          name="privacyPolicyAccepted"
          checked={formValues.privacyPolicyAccepted}
          onChange={handlePrivacyChange}
          disabled={isFeedbackSubmitted}
        />
        <span>
          I have read and agree to the{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </span>
      </label>
      {fieldErrors.privacyPolicyAccepted && (
        <p className={styles.errorMessage}>{fieldErrors.privacyPolicyAccepted}</p>
      )}

      {/* Submission status */}
      {submitError && (
        <div className={styles.submitError} role="alert">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className={styles.submitSuccess} role="status">
          {submitSuccess}
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        className={styles.submitButton}
        disabled={isSubmitting || isFeedbackSubmitted}
      >
        {submitContent}
      </Button>

      {isFeedbackSubmitted && (
        <div className={styles.backAction}>
          <BackButton />
        </div>
      )}
    </form>
  );
}
