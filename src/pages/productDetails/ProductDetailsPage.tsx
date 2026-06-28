import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryCarousel } from "@/components/category/CategoryCarousel/CategoryCarousel";
import { ProductDetails } from "@/components/product/ProductDetails/ProductDetails";
import { supabase } from "@/lib/supabase";
import styles from "./ProductDetailsPage.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
  allergens: string[] | null;
  weight: string | null;
  image_url: string;
  cartItemId: string;
};

type ProductData = {
  id: number;
  name: string;
  title: string;
  price: number;
  description: string | null;
  allergens: string[] | null;
  weight: string | null;
  image_url: string;
};

type ProductSource = "products" | "comboDeals";

type ProductDetailsPageProps = {
  productSource?: ProductSource;
};

/* Product details page shell */
export function ProductDetailsPage({
  productSource = "products",
}: ProductDetailsPageProps) {
  const { productId } = useParams();

  // Product data state
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product by id
  useEffect(() => {
    async function fetchProduct() {
      const productIdNumber = Number(productId);
      const isComboDeals = productSource === "comboDeals";

      if (!productId || !Number.isFinite(productIdNumber)) {
        setProduct(null);
        setIsLoading(false);
        return;
      }

      let data: ProductData | null;
      let error: unknown;

      if (isComboDeals) {
        const response = await supabase
          .from("combo_deals")
          .select("id, title, price, description, allergens, weight, image_url")
          .eq("id", productIdNumber)
          .maybeSingle();

        data = response.data as ProductData | null;
        error = response.error;
      } else {
        const response = await supabase
          .from("products")
          .select("id, name, price, description, allergens, weight, image_url, category, is_popular")
          .eq("id", productIdNumber)
          .maybeSingle();

        data = response.data as ProductData | null;
        error = response.error;
      }

      if (error) {
        console.error(error);
        setProduct(null);
        setIsLoading(false);
        return;
      }

      setProduct(data ? {
        id: data.id,
        name: isComboDeals ? data.title : data.name,
        price: data.price,
        description: data.description,
        allergens: data.allergens,
        weight: data.weight,
        image_url: data.image_url,
        cartItemId: `${isComboDeals ? "combo" : "product"}-${data.id}`,
      } : null);
      setIsLoading(false);
    }

    fetchProduct();
  }, [productId, productSource]);

  return (
    <main className={styles.page}>
      <CategoryCarousel />

      {isLoading && (
        <p className={styles.stateMessage}>Loading product...</p>
      )}

      {!isLoading && product && (
        <ProductDetails product={product} />
      )}

      {!isLoading && !product && (
        <p className={styles.stateMessage}>Product not found.</p>
      )}
    </main>
  );
}
