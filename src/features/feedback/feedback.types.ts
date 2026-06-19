// Form state contract
export type FeedbackFormValues = {
  name: string;
  email: string;
  mobilePhone: string;
  message: string;
  privacyPolicyAccepted: boolean;
};

// Field validation map
export type FeedbackFieldErrors = Partial<Record<keyof FeedbackFormValues, string>>;

// Validated submit data
export type FeedbackSubmitPayload = {
  name: string;
  email: string;
  mobilePhone: string;
  message: string;
  privacyPolicyAccepted: true;
};

// Supabase insert shape
export type FeedbackMessageInsertPayload = {
  name: string;
  email: string;
  mobile_phone: string;
  message: string;
  privacy_policy_accepted: true;
};

// UI-safe submit result
export type FeedbackSubmitResult =
  | { success: true }
  | { success: false; errorMessage: string };
