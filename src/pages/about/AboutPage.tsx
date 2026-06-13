import styles from "./AboutPage.module.css";

// About page
export function AboutPage() {
  return (
    // About page container
    <main className={styles.page}>
      {/* About card */}
      <article className={styles.aboutCard}>
        {/* About title */}
        <h1 className={styles.aboutTitle}>ABOUT US</h1>

        {/* About content */}
        <div className={styles.aboutContent}>
          <p>
            Pizza Hub is a family-owned restaurant based in Berlin, Germany, created with a passion for quality food and friendly service.
          </p>

          <p>
            Our menu offers authentic Italian pizzas, juicy burgers, delicious sandwiches, and carefully prepared desserts made with selected ingredients and attention to detail.
          </p>

          <p>
            Whether you order for delivery or visit us in person, our goal is simple: to serve great food, provide a welcoming atmosphere, and make every customer feel at home.
          </p>

          <p>
            We invite you to explore our menu, discover your favorite dishes, and enjoy the Pizza Hub experience.
          </p>

          <p>
            All Pizza Hub packaging is 100% recyclable.
          </p>
        </div>
      </article>
    </main>
  );
}
