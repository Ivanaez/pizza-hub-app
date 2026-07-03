// Form state contract
export type CheckoutFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  streetNumber: string;
  city: string;
  postalCode: string;
};

// Field validation map
export type CheckoutFieldErrors = Record<keyof CheckoutFormValues, string>;
