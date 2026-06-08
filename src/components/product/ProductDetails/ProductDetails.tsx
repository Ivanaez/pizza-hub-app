import { BackButton } from "@/components/navigation/BackButton/BackButton";
import { ProductInfoCard } from "./ProductInfoCard/ProductInfoCard";
import { ProductHero } from "./ProductHero/ProductHero";
import styles from "./ProductDetails.module.css";

type ProductDetailsProduct = {
  name: string;
  price: number;
  image_url: string;
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
            name={product.name}
            price={product.price}
            imageUrl={product.image_url}
          />
        </div>

      <div className={styles.sidebar}>
        <ProductInfoCard />
        </div>
      </div>
    </section>
  );
}
