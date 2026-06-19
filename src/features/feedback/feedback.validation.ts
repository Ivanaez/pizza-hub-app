import { parsePhoneNumberFromString } from "libphonenumber-js";
import type { FeedbackFieldErrors, FeedbackFormValues } from "./feedback.types";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Client-side validation boundary
export function validateFeedbackForm(values: FeedbackFormValues): FeedbackFieldErrors {
  const errors: FeedbackFieldErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const mobilePhone = values.mobilePhone.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email";
  }

  // Match checkout phone rules
  const parsedPhone = parsePhoneNumberFromString(mobilePhone, "DE");

  if (!mobilePhone) {
    errors.mobilePhone = "Mobile phone is required";
  } else if (!parsedPhone || !parsedPhone.isValid()) {
    errors.mobilePhone = "Please enter a valid phone number";
  }

  if (!message) {
    errors.message = "Message is required";
  }

  if (!values.privacyPolicyAccepted) {
    errors.privacyPolicyAccepted = "You must accept the Privacy Policy";
  }

  return errors;
}

// Boolean error guard
export function hasFeedbackValidationErrors(errors: FeedbackFieldErrors) {
  return Object.values(errors).some(Boolean);
}
