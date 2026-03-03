import styles from './HomePage.module.css';
import Hero from '../../components/sections/Hero/Hero';
import { PizzaList } from "../../components/pizza/PizzaList/PizzaList";
function HomePage() {
  return (
    
  //  Controls homepage layout and styling
    <main className={styles.page}>
     
      <Hero />
      <PizzaList />
    </main>
  );
}

export default HomePage;