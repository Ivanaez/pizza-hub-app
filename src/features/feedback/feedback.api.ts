import { supabase } from "@/lib/supabase";
import type {
  FeedbackMessageInsertPayload,
  FeedbackSubmitPayload,
  FeedbackSubmitResult,
} from "./feedback.types";

// UI fallback copy
const feedbackSubmitErrorMessage = "We could not send your feedback. Please try again.";

// Feedback persistence boundary
export async function submitFeedbackMessage(
  payload: FeedbackSubmitPayload): Promise<FeedbackSubmitResult> {
  // Database payload adapter
  const insertPayload: FeedbackMessageInsertPayload = {
    name: payload.name,
    email: payload.email,
    mobile_phone: payload.mobilePhone,
    message: payload.message,
    privacy_policy_accepted: payload.privacyPolicyAccepted,
  };

  try {
    const { error } = await supabase
      .from("feedback_messages")
      .insert(insertPayload);

    if (error) {
      // Keep backend details private
      console.error("Feedback submission failed", error);
      return { success: false, errorMessage: feedbackSubmitErrorMessage };
    }

    return { success: true };
  } catch (error) {
    // Keep backend details private
    console.error("Feedback submission failed", error);
    return { success: false, errorMessage: feedbackSubmitErrorMessage };
  }
}
