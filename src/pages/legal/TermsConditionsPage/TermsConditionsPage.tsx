import { LegalDocument } from "@/components/legal/LegalDocument/LegalDocument";
import termsConditionsContent from "@/content/legal/terms-conditions.md?raw";
import styles from "./TermsConditionsPage.module.css";

// Terms conditions page
export function TermsConditionsPage() {
  return (
    // Terms page container
    <main className={styles.page}>
      {/* Terms document */}
      <LegalDocument content={termsConditionsContent} />
    </main>
  );
}
