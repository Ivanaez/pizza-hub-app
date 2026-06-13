import { Clock, Mail, MapPin, Phone } from "lucide-react";
import styles from "./ContactPage.module.css";

// Contact page
export function ContactPage() {
  return (

    // Contact page container
    <main className={styles.page}>
      {/* Contact card */}
      <article className={styles.contactCard}>
        {/* Contact header */}
        <header className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>CONTACT</h1>
          <p className={styles.contactIntro}>
            Have a question about our menu, delivery, or opening hours? We are happy to help.
          </p>
        </header>


        {/* Contact details */}
        <div className={styles.contactDetails}>
        <section className={styles.contactItem}>
          <Phone className={styles.contactIcon} aria-hidden="true" />
            <div className={styles.contactText}>
             <h2 className={styles.contactLabel}>CALL US</h2>
              <a className={styles.contactValue} href="tel:+493012345678">
                +49 30 1234 5678
              </a>
            </div>
          </section>

          <section className={styles.contactItem}>
            <Mail className={styles.contactIcon} aria-hidden="true" />
            <div className={styles.contactText}>
            <h2 className={styles.contactLabel}>EMAIL US</h2>
              <a className={styles.contactValue} href="mailto:hello@pizzahub.com">
                hello@pizzahub.com
              </a>
            </div>
          </section>


          <section className={styles.contactItem}>
            <MapPin className={styles.contactIcon} aria-hidden="true" />
            <div className={styles.contactText}>
              <h2 className={styles.contactLabel}>VISIT US</h2>
              <a
                className={styles.contactValue}
                href="https://www.google.com/maps/search/?api=1&query=Alexanderplatz+1+10178+Berlin+Germany"
                target="_blank"
                rel="noreferrer"
              >
                Alexanderplatz 1, 10178 Berlin, Germany
              </a>
            </div>
          </section>



            <section className={styles.contactItem}>
              <Clock className={styles.contactIcon} aria-hidden="true" />
             <div className={styles.contactText}>
             <h2 className={styles.contactLabel}>OPENING HOURS</h2>
             <p className={styles.contactValue}>Mon - Sun: 09:30 - 22:00</p>
            </div>
            </section>
          </div>
          
        </article>

      </main>
  );
}
