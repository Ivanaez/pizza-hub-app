import type { LucideIcon } from "lucide-react";
import { Bean, Egg, Fish, Milk, Wheat } from "lucide-react";
import styles from "./ProductInfoCard.module.css";

type ProductInfoCardProps = {
  description: string | null;
  allergens: string[] | null;
};

const allergenMap: Record<string, { label: string; icon: LucideIcon }> = {
  gluten: { label: "Gluten", icon: Wheat },
  milk: { label: "Milk", icon: Milk },
  egg: { label: "Egg", icon: Egg },
  soy: { label: "Soy", icon: Bean },
  fish: { label: "Fish", icon: Fish },
};

/* Product information card */
export function ProductInfoCard({ description, allergens }: ProductInfoCardProps) {
  const productDescription = description?.trim() || "Product details are not available yet.";
  const productAllergens = (allergens ?? [])
    .map((allergen) => allergenMap[allergen])
    .filter(Boolean);

  return (
    <aside className={styles.card}>
      <h2 className={styles.title}>DESCRIPTION</h2>
      <p className={styles.description}>
        {productDescription}
      </p>

      <div className={styles.section}>
        <h3>ALLERGENS</h3>

        {productAllergens.length > 0 ? (
          <div className={styles.allergenList}>
            
            {productAllergens.map(({ label, icon: Icon }) => (
              <span key={label} className={styles.allergenItem}>
                <Icon size={18} strokeWidth={2.5} />
                {label}
              </span>
            ))}
          </div>
        ) : (
          <p className={styles.sectionText}>Allergen information is not available.</p>
        )}

      </div>
    </aside>
  );
}
