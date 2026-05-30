import { useEffect, useState } from "react";
import styles from "./CategoryCarousel.module.css";
import { CategoryCard } from "@/components/category/CategoryCard/CategoryCard";
import { supabase } from "@/lib/supabase";

// Category database object type
type Category = {
  id: number;
  title: string;
  slug: string;
  image_url: string;
};

// Category carousel component
export function CategoryCarousel() {
  // Categories state array
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories on load
  useEffect(() => {
    // Fetch categories from database
    async function fetchCategories() {
      const { data, error } = await supabase
      .from("categories")
      .select("*");

      // Handle fetch request errors
      if (error) {
      console.error(error);
      return;
      }

      // Update categories state
      setCategories(data ?? []);
    }

    fetchCategories();
  }, []);

  // Render category carousel cards
  return (
    <div className={styles.carousel}>

    {categories.map((category) => (

        <CategoryCard
          key={category.id}
          title={category.title}
          image={category.image_url}
          to={`/menu/${category.slug}`}
        />
      ))}
    </div>
  );
}