import { Clock, Euro, Info, MapPin, Truck } from "lucide-react";

import { LinkButton } from "@/ui/LinkButton/LinkButton";
import styles from "./DeliveryPage.module.css";




// Delivery page
export function DeliveryPage() {
  
  const deliveryHighlights = [
    {
      title: "Delivery Time",
      description: "Around 30 minutes",
      icon: Truck,
    },
    {
      title: "Delivery Fee",
      description: "3.90 €",
      icon: Euro,
    },
    {
      title: "Location",
      description: "Berlin, Germany",
      icon: MapPin,
    },
    {
      title: "Opening Hours",
      description: "Mon - Sun, 09:30 AM - 22:00 PM",
      icon: Clock,
    },
  ];

  const deliverySteps = [
    {
      title: "Choose your food",
      description: "Browse the menu and select your favorite items.",
    },
    {
      title: "Add items to cart",
      description: "Review your order before checkout.",
    },
    {
      title: "Enter delivery details",
      description: "Provide shipping information during checkout.",
    },
  ];

  const deliveryNotes = [
    "Delivery times may vary depending on order size and address.",
    "Please enter accurate contact and address details at checkout.",
    "Payment options are selected during checkout.",
    "Packaging is recyclable.",
  ];




  return (
    // Delivery page container
    <main className={styles.page}>
      {/* Delivery card */}
      <article className={styles.deliveryCard}>
        {/* Delivery title */}
        <h1 className={styles.deliveryTitle}>DELIVERY</h1>

        {/* Delivery intro */}
        <p className={styles.deliveryIntro}>
          Fresh Pizza Hub meals delivered across Berlin with a simple checkout flow and clear delivery details.
        </p>
      </article>




      {/* Delivery highlights */}
      <section className={styles.deliveryCard}>
        <h2 className={styles.cardTitle}>DELIVERY HIGHLIGHTS</h2>

        <div className={styles.highlightsList}>
          {deliveryHighlights.map((highlight) => {
            const HighlightIcon = highlight.icon;

            return (
              <article key={highlight.title} className={styles.highlightItem}>
                <HighlightIcon className={styles.highlightIcon} aria-hidden="true" />

                <div className={styles.itemText}>
                  <h3 className={styles.itemTitle}>{highlight.title}</h3>
                  <p className={styles.itemDescription}>{highlight.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>



      {/* Delivery steps */}
      <section className={styles.deliveryCard}>
        <h2 className={styles.cardTitle}>HOW DELIVERY WORKS</h2>

        <div className={styles.stepsList}>
          {deliverySteps.map((step, index) => (
            <article key={step.title} className={styles.stepItem}>
              <span className={styles.stepNumber}>{index + 1}</span>

              <div className={styles.itemText}>
                <h3 className={styles.itemTitle}>{step.title}</h3>
                <p className={styles.itemDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* Delivery area */}
      <section className={styles.deliveryCard}>
        <h2 className={styles.cardTitle}>DELIVERY AREA</h2>

        <div className={styles.areaContent}>
          <MapPin className={styles.areaIcon} aria-hidden="true" />

          <div className={styles.textContent}>
            <p>Pizza Hub is located at Alexanderplatz 1, 10178 Berlin, Germany.</p>
            <p>Delivery is presented as part of the Berlin ordering experience.</p>
          </div>
        </div>
      </section>



      {/* Delivery notes */}
      <section className={styles.deliveryCard}>
        <h2 className={styles.cardTitle}>DELIVERY NOTES</h2>

        <ul className={styles.notesList}>
          {deliveryNotes.map((note) => (

          <li key={note} className={styles.noteItem}>
            <Info className={styles.noteIcon} aria-hidden="true" />
            <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>



      {/* Delivery actions */}
      <div className={styles.deliveryActions}>
        <LinkButton to="/menu" variant="primary" className={styles.deliveryAction}>
          ORDER FROM MENU
        </LinkButton>

        <LinkButton to="/contact" variant="secondary" className={styles.deliveryAction}>
          CONTACT US
        </LinkButton>
      </div>

      {/* Demo note */}
      <p className={styles.demoNote}>
        Delivery details entered in PizzaHub are used to complete the checkout flow within the application.
      </p>
    </main>
  );
}
