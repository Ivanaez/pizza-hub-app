
import styles from "./CartPage.module.css";
import { useCart } from "@/features/cart/CartContext";
import { Trash2,Minus,Plus} from "lucide-react";
import LinkButton from "@/ui/LinkButton/LinkButton";



export default function CartPage() {
// Get cart state and functions from the cart context
  const { cartItems,removeFromCart,increaseQuantity,decreaseQuantity,subtotal,total,delivery } = useCart();

// Check if the cart is empty
const isCartEmpty = cartItems.length === 0;



  return (

    <main className={styles.cartPage}>

      <div className={styles.cartContainer}>

        <header >
           
          <h1 className={`${styles.title} ${isCartEmpty ? styles.empty : ""}`}>
          {isCartEmpty ? "Your cart is empty" : "Your Cart"}
            </h1>  

        </header>
        


      <div className={styles.cartContent}>
 
        {/* Cart items section */}
        <section>

           {cartItems.map((item) => (
          <article key={item.id} className={styles.cartItemWrapper}>

            {/* Product image area */}
            <div className={styles.imageWrapper}>
              <img
                src={item.image} alt={item.title}
                
              />
            </div>

            {/* Product text block */}
            <div className={styles.productInfo}>
              <h2 className={styles.productName}> {item.title}</h2>
              <p className={styles.productPrice}> {item.price.toFixed(2)} €</p>
            </div>


           

                  {/* Quantity buttons */}
              <div className={styles.quantityControlContainer}>

                <button type="button" className={styles.quantityButton} 
                onClick={() => decreaseQuantity(item.id)}>
                    <Minus size={16} />
                </button>

                {/* Quantity value */}
                <span className={styles.quantityValue}> {item.quantity} </span>
                 {/**/}
                <button type="button" className={styles.quantityButton} 
                onClick={() => increaseQuantity(item.id)}>
                    <Plus size={16} />
                </button>
              </div>

              {/* Remove item button */}
              <button type="button" className={styles.deleteButton} 
              onClick={() => removeFromCart(item.id)}>     
                <Trash2 className={styles.deleteIcon} />
              </button>

            
          </article>
        ))}
        </section>
       








  

    
    {!isCartEmpty && (  // If the cart is empty, hide the summary section

<aside className={styles.cartSummary}> {/* Cart summary section **********************************************/}
  {/* Summary card title */}
  <h2 className={styles.summaryTitle}>Cart Summary</h2>

 

  {/* Summary rows block */}
  <div className={styles.summaryRows}>

    {/* Subtotal price row */}
    <div className={styles.summaryRow}>
      <span className={styles.summaryLabel}>Subtotal</span>
      <span className={styles.summaryValue}>{subtotal.toFixed(2)} €</span>
    </div>

    {/* Delivery price row */}
    <div className={styles.summaryRow}>
      <span className={styles.summaryLabel}>Delivery</span>
      <span className={styles.summaryValue}>{delivery.toFixed(2)} €</span>
    </div>
      {/* section devider line*/}
     <div className={styles.summaryDivider} />
     </div>
  

  {/* Final total row */}
  <div className={styles.summaryTotal}>
    <span className={styles.summaryTotalLabel}>Total</span>
    <span className={styles.summaryTotalValue}>{total.toFixed(2)} €</span>
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

    <LinkButton to="/"
     className={styles.continueButton}
     variant="secondary">
      Continue Shopping
    </LinkButton>

  </div>
</aside>
)}


</div>
</div>

    </main>
  );
}



