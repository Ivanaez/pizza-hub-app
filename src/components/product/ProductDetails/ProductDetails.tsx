import { BackButton } from "@/components/navigation/BackButton/BackButton";
import { ProductInfoCard } from "./ProductInfoCard/ProductInfoCard";
import { ProductHero } from "./ProductHero/ProductHero";
import styles from "./ProductDetails.module.css";

type ProductDetailsProduct = {
  id: number;
  name: string;
  price: number;
  description: string | null;
  allergens: string[] | null;
  weight: string | null;
  image_url: string;
  cartItemId: string;
};

type ProductDetailsProps = {
  product: ProductDetailsProduct;
};

/* Product details layout */
export function ProductDetails({ product }: ProductDetailsProps) {

   return (
    <section className={styles.details}>
      <div className={styles.topRow}>
        <BackButton />

      <div className={styles.productHeading}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        </div>
      </div>

    <div className={styles.grid}>
        <div className={styles.heroColumn}>
          <ProductHero
            cartItemId={product.cartItemId}
            name={product.name}
            price={product.price}
            imageUrl={product.image_url}
            weight={product.weight}
          />
        </div>

      <div className={styles.sidebar}>
        <ProductInfoCard
          description={product.description}
          allergens={product.allergens}
        />
        </div>
      </div>
    </section>
  );
}
