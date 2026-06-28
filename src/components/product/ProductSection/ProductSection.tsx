import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { ProductCard } from "@/components/product/ProductCard/ProductCard";

import styles from "./ProductSection.module.css";

// Product card data
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  weight: string | null;
  cartItemId: string;
  detailsPath?: string;
};

type ProductData = {
  id: number;
  name: string;
  title: string;
  image_url: string;
  price: number;
  weight: string | null;
};

type ProductSource = "products" | "comboDeals";

// Section component props
type ProductSectionProps = {
  category?: string;
  productSource?: ProductSource;
};

// Product section component
export function ProductSection({
  category,
  productSource = "products",
}: ProductSectionProps) {
  // Products state array
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products on load
  useEffect(() => {
    // Fetch category products
    async function fetchProducts() {
      const isComboDeals = productSource === "comboDeals";
      let data: ProductData[] | null;
      let error: unknown;

      if (isComboDeals) {
        const response = await supabase
          .from("combo_deals")
          .select("id, title, image_url, price, weight");

        data = response.data as ProductData[] | null;
        error = response.error;
      } else {
        let query = supabase
          .from("products")
          .select("id, name, image_url, price, weight, is_best_seller");

        if (category === "best-seller") {
          query = query.eq("is_best_seller", true);
        } else if (category) {
          query = query.eq("category", category);
        }

        const response = await query;

        data = response.data as ProductData[] | null;
        error = response.error;
      }

      // Handle fetch errors
      if (error) {
        console.error(error);
        return;
      }

      // Update products state
      setProducts((data ?? []).map((product) => ({
        id: product.id,
        title: isComboDeals ? product.title : product.name,
        image: product.image_url,
        price: product.price,
        weight: product.weight,
        cartItemId: `${isComboDeals ? "combo" : "product"}-${product.id}`,
        detailsPath: isComboDeals ? `/combo-deals/${product.id}` : undefined,
      }))
      );
    }

    fetchProducts();
  }, [category, productSource]);

  // Render products section
  return (
    <section className={styles.section}>

      {products.map((product) => (
        <ProductCard
          
           key={product.id}
          id={product.id}
          title={product.title}
          imageSrc={product.image}
           imageAlt={product.title}
          priceFrom={product.price}
          weight={product.weight}
          cartItemId={product.cartItemId}
          detailsPath={product.detailsPath}
          hasDetails={category !== "soft-drinks"}
          variant={category === "best-seller" ? "best-seller" : "default"}
          
        />
      ))}
    </section>
  );
}
