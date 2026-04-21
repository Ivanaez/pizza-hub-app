
import styles from "./CartPage.module.css";
import prosciuttoImg from "../../assets/images/pizzas/Prosciutto.webp";
import { Trash2,Minus,Plus} from "lucide-react";
import LinkButton from "../../ui/LinkButton/LinkButton";



export default function CartPage() {
  return (

    <main className={styles.cartPage}>

      <div className={styles.cartContainer}>

        <header >
          {/* Cart page heading */}
          <h1 className={styles.title}>Your Cart</h1>
        </header>

      <div className={styles.cartContent}>

        {/* Cart items section */}
        <section>
          
          <article className={styles.cartItemWrapper}>

            {/* Product image area */}
            <div className={styles.imageWrapper}>
              <img
                src={prosciuttoImg}
                alt="Proscuitto"
              />
            </div>

            {/* Product text block */}
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>Proscuitto</h2>
              <p className={styles.productPrice}>12.99€</p>
            </div>


           

                  {/* Quantity buttons */}
              <div className={styles.quantityControlContainer}>

                <button type="button" className={styles.quantityButton}>
                    <Minus size={16} />
                </button>

                {/* Quantity value */}
                <span className={styles.quantityValue}>1</span>
                 {/**/}
                <button type="button" className={styles.quantityButton}>
                    <Plus size={16} />
                </button>
              </div>

              {/* Remove item button */}
              <button type="button" className={styles.deleteButton}>
                <Trash2 className={styles.deleteIcon} />
              </button>

            
          </article>
        </section>
       








      {/* Cart summary section **********************************************/}
<aside className={styles.cartSummary}>
  {/* Summary card title */}
  <h2 className={styles.summaryTitle}>Cart Summary</h2>

 

  {/* Summary rows block */}
  <div className={styles.summaryRows}>

    {/* Subtotal price row */}
    <div className={styles.summaryRow}>
      <span className={styles.summaryLabel}>Subtotal</span>
      <span className={styles.summaryValue}>49.00€</span>
    </div>

    {/* Delivery price row */}
    <div className={styles.summaryRow}>
      <span className={styles.summaryLabel}>Delivery</span>
      <span className={styles.summaryValue}>Free</span>
    </div>
      {/* section devider line*/}
     <div className={styles.summaryDivider} />
     </div>
  

  {/* Final total row */}
  <div className={styles.summaryTotal}>
    <span className={styles.summaryTotalLabel}>Total</span>
    <span className={styles.summaryTotalValue}>49.00€</span>
    {/* section devider line*/}
  
  </div>
  <div className={styles.summaryDivider} />




  {/* Summary action buttons ***************/}
  <div className={styles.summaryActions}>

    <LinkButton to="/checkout" 
    className={styles.checkoutButton}
    variant="primary"
    >
    Proceed to Checkout
  </LinkButton>

    <LinkButton to="/menu"
     className={styles.continueButton}
     variant="secondary">
      Continue Shopping
    </LinkButton>

  </div>
</aside>
</div>
</div>

    </main>
  );
}



