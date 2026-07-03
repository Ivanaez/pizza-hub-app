import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Banknote, Check, CreditCard, Lock, User } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import type {
  CheckoutFieldErrors,
  CheckoutFormValues,
} from "@/features/checkout/checkout.types";
import {
  hasCheckoutValidationErrors,
  initialCheckoutErrors,
  validateCheckoutForm,
} from "@/features/checkout/checkout.validation";
import styles from "./CheckoutForm.module.css";

const initialCheckoutValues: CheckoutFormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
};

// Checkout form component
export function CheckoutForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormValues>(initialCheckoutValues);
  const [errors, setErrors] = useState<CheckoutFieldErrors>(initialCheckoutErrors);

  const buttonContent = () => {
    if (isSubmitting) {
      return <span className={styles.spinner}></span>;
    }

    return (
      <>
        <Lock size={20} />
        Complete Order
      </>
    );
  };

  // Update checkout fields
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const cleanedValue =
      name === "postalCode" ||
      name === "streetNumber" ||
      name === "phone"
        ? value.replace(/\D/g, "")
        : value;

    setFormData({ ...formData, [name]: cleanedValue });
  };

  // Submit checkout form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateCheckoutForm(formData);
    setErrors(newErrors);

    if (hasCheckoutValidationErrors(newErrors)) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      navigate("/confirmation", { state: { fromCheckout: true } });
    }, 3000);
  };

  return (
    <div className={styles.checkoutContainer}>
      {/* Checkout steps */}
        <section className={styles.checkoutSteps}>
        <div className={styles.checkoutStep}>
             <span>
                <Check size={20} />
          </span>
          <p>Cart</p>
        </div>

        <div className={styles.checkoutStep}>
          <span>2</span>
          <p>Checkout</p>
        </div>

        <div className={styles.checkoutStep}>
             <span>3</span>
          <p>Confirmation</p>
          </div>
      </section>

      {/* Shipping card */}
        <section className={styles.checkoutCard}>
        <header className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
            <User />
          </span>

          <div>
            <h2>Shipping Details</h2>
            <p>Please enter your delivery information.</p>
          </div>
        </header>

        {/* Shipping form */}
        <form id="checkoutForm" onSubmit={handleSubmit} className={styles.checkoutForm}>
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

            {errors.firstName && (
              <p className={styles.errorMessage}>{errors.firstName}</p>
            )}

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

            {errors.lastName && (
              <p className={styles.errorMessage}>{errors.lastName}</p>
            )}
          </div>

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

            {errors.phone && (
              <p className={styles.errorMessage}>{errors.phone}</p>
            )}
          </div>

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

            {errors.street && (
              <p className={styles.errorMessage}>{errors.street}</p>
            )}
          </div>

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

            {errors.city && (
              <p className={styles.errorMessage}>{errors.city}</p>
            )}
          </div>

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

            {errors.postalCode && (
              <p className={styles.errorMessage}>{errors.postalCode}</p>
            )}
          </div>
        </form>
      </section>

      {/* Payment card */}
      <section className={styles.paymentCard}>
        <header className={styles.sectionHeader}>
          <div>
            <h2>Payment Method</h2>
            <p>Choose your preferred payment method.</p>
          </div>
        </header>

        <div className={styles.paymentOptionsWrapper}>
          <div className={styles.paymentOption}>
            <input type="radio" name="payment" defaultChecked />

            <span>
              <Banknote size={20} />
            </span>

            <div className={styles.paymentContent}>
              <div>
                <h3>Cash on delivery</h3>
                <p>Pay when you receive your order.</p>
              </div>
            </div>
          </div>

          <div className={styles.paymentOption}>
            <input type="radio" name="payment" />

            <span>
              <CreditCard size={20} />
            </span>

            <div className={styles.paymentContent}>
              <div>
                   <h3>Card</h3>
                <p>Pay securely with your debit or credit card.</p>
                  </div>
            </div>
            </div>
        </div>
      </section>

      {/* Checkout action */}
      <section className={styles.checkoutAction}>
        <Button
          type="submit"
          variant="secondary"
          form="checkoutForm"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {buttonContent()}
        </Button>
      </section>
    </div>
  );
}
