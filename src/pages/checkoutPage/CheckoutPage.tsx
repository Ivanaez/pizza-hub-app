import styles from "./CheckoutPage.module.css";
import Input from "../../ui/Input/Input";
import { Check, User,ShieldCheck ,CreditCard, Banknote,Lock } from "lucide-react";
import Button from "../../ui/Button/Button";



export default function CheckoutPage() {
  return (
    /* Main checkout page wrapper */
    <main className={styles.checkoutPage}>

      {/* Centered page content container */}
      <div className={styles.checkoutContainer}>



        {/* Checkout progress steps navigation ************************************************/}
        <section className={styles.checkoutSteps}>

          {/* Step one cart indicator */}
          <div className={styles.checkoutStep}>
            <span> <Check size={20} /></span>
            <p>Cart</p>
          </div>

          {/* Step two active checkout */}
          <div className={styles.checkoutStep}>
            <span>2</span>
            <p>Checkout</p>
          </div>

          {/* Step three confirmation state */}
          <div className={styles.checkoutStep}>
            <span>3</span>
            <p>Confirmation</p>
          </div>

        </section>




        {/* Main checkout card container */}
        <section className={styles.checkoutCard}>

          {/* Shipping section title block */}
          <header className={styles.sectionHeader}>
            {/* Section icon placeholder */}
            <span className={styles.sectionIcon}><User /></span>

            {/* Title and description wrapper */}
            <div>
              <h2>Shipping Details</h2>
              <p>Please enter your delivery information.</p>
            </div>

          </header>




          {/* Shipping form input fields ******************************************************/}
          <form className={styles.checkoutForm}>

            {/* First name input field */}
            <div className={styles.formField}>
              <label htmlFor="firstName">First name</label>

              <Input
               id="firstName" 
               name="firstName" 
               placeholder="Enter your first name" 
               />

            </div>

            {/* Last name input field */}
            <div className={styles.formField}>
              <label htmlFor="lastName">Last name</label>

              <Input 
              id="lastName" 
              name="lastName" 
              placeholder="Enter your last name" 
              />

            </div>

            {/* Phone number input field */}
            <div className={styles.formField}>
              <label htmlFor="phoneNumber">Phone number</label>

              <Input
               id="phoneNumber" 
               name="phoneNumber" 
               type="tel" placeholder="Enter your phone number"
                />

            </div>

            {/* Street address input field */}
            <div className={styles.formField}>
              <label htmlFor="street">Street</label>

              <Input 
              id="street" 
              name="street"
              placeholder="Enter your street" 
               />

            </div>

            {/* Street number input field */}
            <div className={styles.formField}>
              <label htmlFor="streetNumber">Street number</label>

              <Input 
              id="streetNumber"
               name="streetNumber" 
               placeholder="Enter number"
                />

            </div>

            {/* City name input field */}
            <div className={styles.formField}>
                
              <label htmlFor="city">City</label>
              <Input 

              id="city" 
              name="city" 
              placeholder="Enter your city" 
              />

            </div>

            {/* Postal code input field */}
            <div className={styles.formField}>
              <label htmlFor="postalCode">Postal code</label>
              <Input 

              id="postalCode" 
              name="postalCode" 
              placeholder="Enter postal code"
               />
            </div>

          </form>

        </section>




             {/* Payment method section card ****************************************************/}
    <section className={styles.paymentCard}>


          {/* Payment section title block */}
       <header className={styles.sectionHeader}>

        {/* Title and description wrapper */}
        <div>
         <h2>Payment Method</h2>
         <p>Choose your preferred payment method.</p>
       </div>

      </header>




     {/* Payment options container */}
     <div className={styles.paymentOptionsWrapper}>

      {/* Cash payment option */}
       <div className={styles.paymentOption}>

            <input type="radio" name="payment" defaultChecked />

         <span><Banknote size={20} /></span>

         <div>
           <h3>Cash on delivery</h3>
           <p>Pay when you receive your order.</p>
         </div>
        </div>



       {/* Card payment option */}
       <div className={styles.paymentOption}>

         <input type="radio" name="payment" />

        <span><CreditCard size={20} /></span>

         <div>
           <h3>Card</h3>
           <p>Pay securely with your debit or credit card.</p>
         </div>
       </div>

     </div>

    </section>



          {/* Order submit action section *****************************************************/}
    <section className={styles.checkoutAction}>

     {/* Submit order button */}
     <Button
      type="submit"
      variant = "secondary"
      className={styles.submitButton}>
        <Lock size={18} />  
        Complete Order

     </Button>


     {/* Security message text */}
     <p className={styles.securityNote}>
         <span><ShieldCheck size={16} /></span>
       Your data is safe and secure
     </p>

   </section>
        

      </div>
    </main>
  );
}

