import styles from "./CheckoutPage.module.css";
import { Input } from "@/ui/Input/Input";
import { Check, User,CreditCard, Banknote,Lock } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { parsePhoneNumberFromString } from "libphonenumber-js"
import { useCart } from "@/features/cart/CartContext";

// Checkout page component for handling user input and navigation
export function CheckoutPage() {

  // Navigation hook for programmatic route changes
const navigate = useNavigate();

// Get cart items
const { cartItems } = useCart();

// Prevent empty checkout
if (cartItems.length === 0) {
  return <Navigate to="/cart" replace />;
}

// State to Boolean to track form submission status and control button state
const [isSubmitting, setIsSubmitting] = useState(false)
// Button content changes based on submission state to show spinner or default text
const buttonContent = () => {
  if (isSubmitting) {
    return <span className={styles.spinner}></span>
  }
  return (
    <>
      <Lock size={20} />
      Complete Order
    </>
  )
}




// Form state management for shipping details
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
  
});


// Validation error state for form fields
const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
})


// Handle input changes and update form state with optional cleaning for specific fields
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target

  const cleanedValue =
    name === "postalCode" ||
    name === "streetNumber" ||
    name === "phone"
      ? value.replace(/\D/g, "")
      : value

  setFormData({ ...formData, [name]: cleanedValue })
}






// Handle form submission with validation
const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()


  const nameRegex = /^[A-Za-z\s'-]+$/


  const firstName = formData.firstName.trim()
  const lastName = formData.lastName.trim()
  const phone = formData.phone.trim()
  const street = formData.street.trim()
  const streetNumber = formData.streetNumber.trim()
  const city = formData.city.trim()
  const postalCode = formData.postalCode.trim()

  const parsedPhone = parsePhoneNumberFromString(phone, "DE")


  // Initialize new errors object for validation results
 const newErrors = {
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
}


// first name validation: minimum length and character type
  if (firstName.length < 2) {
    newErrors.firstName = "First name must be at least 2 characters"
  } else if (!nameRegex.test(firstName)) {
    newErrors.firstName = "First name must contain only Latin letters"
  }

// last name validation: minimum length and character type
  if (lastName.length < 2) {
    newErrors.lastName = "Last name must be at least 2 characters"
  } else if (!nameRegex.test(lastName)) {
    newErrors.lastName = "Last name must contain only Latin letters"
  }

// phone number validation using libphonenumber-js for German format
  if (!parsedPhone || !parsedPhone.isValid()) {
  newErrors.phone = "Please enter a valid phone number"
}

// address local validation
if (!street) {
  newErrors.street = "Street is required"
}

if (!streetNumber) {
  newErrors.streetNumber = "Street number is required"
}

if (!city) {
  newErrors.city = "City is required"
}

if (!postalCode) {
  newErrors.postalCode = "Postal code is required"
}


// Update error state with validation results
  setErrors(newErrors)

  if (newErrors.firstName || newErrors.lastName || newErrors.phone || newErrors.street || newErrors.streetNumber || newErrors.city || newErrors.postalCode) return

// Simulate form submission and navigate to confirmation page after a delay
  setIsSubmitting(true)

setTimeout(() => {
  navigate("/confirmation", { state: { fromCheckout: true } })
}, 3000)
  
}




// JSX structure for the checkout page with form fields, validation messages, and navigation
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
          <form id="checkoutForm" onSubmit={handleSubmit} className={styles.checkoutForm}>

            {/* First name input field */}
            <div className={styles.formField}>
              <label htmlFor="firstName">First name</label>

              <Input
               id="firstName" 
               name="firstName" 
               placeholder="Enter your first name" 
                value={formData.firstName}
                onChange={handleChange}
                 className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}

               />
                       
                {/* First name error message */}
                 {errors.firstName && (
                  <p className={styles.errorMessage}>
                 {errors.firstName}
                   </p>
                  )}

            {/* Last name input field */}
            <div className={styles.formField}>
              <label htmlFor="lastName">Last name</label>

              <Input 
              id="lastName" 
              name="lastName" 
              placeholder="Enter your last name" 
              value={formData.lastName}
              onChange={handleChange}
              className={`${styles.input} ${errors.lastName ? styles.inputError : ""}`}
              />
                      </div>

                       {/* Last name error message */}
                        {errors.lastName && (
                  <p className={styles.errorMessage}>
                            {errors.lastName}
                        </p>
                  )}

            </div>

            {/* Phone number input field */}
            <div className={styles.formField}>
              <label htmlFor="phoneNumber">Phone number</label>

              <Input
               id="phone" 
               name="phone" 
               type="tel"
                placeholder="Enter your phone number"
               value={formData.phone}
               onChange={handleChange}
                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                />

               {/* Phone number error message */}
                        {errors.phone && (
                  <p className={styles.errorMessage}>
                            {errors.phone}
                        </p>
                  )}


            </div>

            {/* Street address input field */}
            <div className={styles.formField}>
              <label htmlFor="street">Street</label>

              <Input 
              id="street" 
              name="street"
              placeholder="Enter your street" 
              value={formData.street}
              onChange={handleChange}
              className={`${styles.input} ${errors.street ? styles.inputError : ""}`}
              />

                {/* Street error message */}
                        {errors.street && (
                  <p className={styles.errorMessage}>
                            {errors.street}
                        </p>
                  )}

            </div>

            {/* Street number input field */}
            <div className={styles.formField}>
              <label htmlFor="streetNumber">Street number</label>

              <Input 
              id="streetNumber"
               name="streetNumber" 
               placeholder="Enter number"
                value={formData.streetNumber}
                onChange={handleChange}
                className={`${styles.input} ${errors.streetNumber ? styles.inputError : ""}`}
              />

            </div>

            {/* City name input field */}
            <div className={styles.formField}>
                
              <label htmlFor="city">City</label>
              <Input 

              id="city" 
              name="city" 
              placeholder="Enter your city" 
              value={formData.city}
              onChange={handleChange}
              className={`${styles.input} ${errors.city ? styles.inputError : ""}`}
              />
              
                {/* City error message */}
                        {errors.city && (
                  <p className={styles.errorMessage}>
                            {errors.city}
                        </p>
                  )}

            </div>

            {/* Postal code input field */}
            <div className={styles.formField}>
              <label htmlFor="postalCode">Postal code</label>
              <Input 

              id="postalCode" 
              name="postalCode" 
              placeholder="Enter postal code"
              value={formData.postalCode}
              onChange={handleChange}
                className={`${styles.input} ${errors.postalCode ? styles.inputError : ""}`}
               />
               
                {/* Postal code error message */}
                        {errors.postalCode && (
                  <p className={styles.errorMessage}>
                            {errors.postalCode}
                        </p>
                  )}

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
       <div className={styles.paymentContent}>
         <div>
           <h3>Cash on delivery</h3>
           <p>Pay when you receive your order.</p>
         </div>
        </div>
      </div>


       {/* Card payment option */}
       <div className={styles.paymentOption}>

         <input type="radio" name="payment" />

        <span><CreditCard size={20} /></span>

       <div className={styles.paymentContent}>
         <div>
           <h3>Card</h3>
           <p>Pay securely with your debit or credit card.</p>
         </div>
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
      form="checkoutForm"
        disabled={isSubmitting}
      className={styles.submitButton}>

      {buttonContent()}

     </Button>

   </section>
        
  

      </div>
       
    </main>
      
  );
}

