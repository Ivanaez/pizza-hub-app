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
  image_url: string;
  category: string;
  is_popular: boolean;
};

/* Product details page shell */
export function ProductDetailsPage() {
  const { productId } = useParams();

  // Product data state
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product by id
  useEffect(() => {
    async function fetchProduct() {
      const productIdNumber = Number(productId);

      if (!productId || !Number.isFinite(productIdNumber)) {
        setProduct(null);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, description, image_url, category, is_popular")
        .eq("id", productIdNumber)
        .maybeSingle();

      if (error) {
        console.error(error);
        setProduct(null);
        setIsLoading(false);
        return;
      }

      setProduct(data);
      setIsLoading(false);
    }

    fetchProduct();
  }, [productId]);

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
