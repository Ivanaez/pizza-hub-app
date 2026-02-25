import styles from './HomePage.module.css';
import Hero from '../../components/sections/Hero/Hero';

function HomePage() {
  return (
    
  //  Controls homepage layout and styling
    <main className={styles.page}>
     
      <Hero />

    </main>
  );
}

export default HomePage;