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
};

// Section component props
type ProductSectionProps = {
  category?: string;
};

// Product section component
export function ProductSection({ category }: ProductSectionProps) {
  // Products state array
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products on load
  useEffect(() => {
    // Fetch category products
    async function fetchProducts() {
      let query = supabase
  .from("products")
  .select("*");

if (category) {
  query = query.eq("category", category);
}

const { data, error } = await query;

      // Handle fetch errors
      if (error) {
        console.error(error);
        return;
      }

      // Update products state
      setProducts((data ?? []).map((product) => ({
        id: product.id,
        title: product.name,
        image: product.image_url,
         price: product.price,
        }))
      );
    }

    fetchProducts();
  }, [category]);

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
          
        />
      ))}
    </section>
  );
}