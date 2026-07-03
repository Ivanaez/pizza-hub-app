import { parsePhoneNumberFromString } from "libphonenumber-js";
import type { CheckoutFieldErrors, CheckoutFormValues } from "./checkout.types";

const nameRegex = /^[A-Za-z\s'-]+$/;

export const initialCheckoutErrors: CheckoutFieldErrors = {
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
};

// Checkout validation boundary
export function validateCheckoutForm(values: CheckoutFormValues): CheckoutFieldErrors {
  const errors: CheckoutFieldErrors = { ...initialCheckoutErrors };

  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const phone = values.phone.trim();
  const street = values.street.trim();
  const streetNumber = values.streetNumber.trim();
  const city = values.city.trim();
  const postalCode = values.postalCode.trim();

  const parsedPhone = parsePhoneNumberFromString(phone, "DE");

  if (firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  } else if (!nameRegex.test(firstName)) {
    errors.firstName = "First name must contain only Latin letters";
  }

  if (lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  } else if (!nameRegex.test(lastName)) {
    errors.lastName = "Last name must contain only Latin letters";
  }

  if (!parsedPhone || !parsedPhone.isValid()) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!street) {
    errors.street = "Street is required";
  }

  if (!streetNumber) {
    errors.streetNumber = "Street number is required";
  }

  if (!city) {
    errors.city = "City is required";
  }

  if (!postalCode) {
    errors.postalCode = "Postal code is required";
  }

  return errors;
}

// Boolean error guard
export function hasCheckoutValidationErrors(errors: CheckoutFieldErrors) {
  return Object.values(errors).some(Boolean);
}
