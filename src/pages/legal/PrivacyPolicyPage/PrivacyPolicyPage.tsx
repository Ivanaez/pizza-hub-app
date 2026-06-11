import { LegalDocument } from "@/components/legal/LegalDocument/LegalDocument";
import privacyPolicyContent from "@/content/legal/privacy-policy.md?raw";
import styles from "./PrivacyPolicyPage.module.css";

// Privacy policy page
export function PrivacyPolicyPage() {
  return (
    // Privacy page container
    <main className={styles.page}>
      {/* Privacy document */}
      <LegalDocument content={privacyPolicyContent} />
    </main>
  );
}
