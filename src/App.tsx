import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/home/HomePage";
import { LoginPage } from "@/pages/login/LoginPage";
import { CreateAccountPage } from "@/pages/createAccount/CreateAccountPage";
import { ForgotPasswordPage } from "@/pages/forgotPassword/ForgotPasswordPage";
import { ResetPasswordPage } from "@/pages/resetPassword/ResetPasswordPage";
import { CartPage } from "@/pages/cart/CartPage";
import { CheckoutPage } from "@/pages/checkoutPage/CheckoutPage";
import { ConfirmationPage } from "@/pages/confirmationPage/ConfirmationPage";
import { MenuPage } from "@/pages/menu/MenuPage";
import { BurgersPage } from "@/pages/menu/burgers/BurgersPage";
import { PizzasPage } from "@/pages/menu/pizzas/PizzasPage";
import { SoftDrinksPage } from "@/pages/menu/softDrinks/SoftDrinksPage";
import { DessertsPage } from "@/pages/menu/desserts/DessertsPage";
import { ProductDetailsPage } from "@/pages/productDetails/ProductDetailsPage";


export function App() {
  return (
    <Routes>
                      {/* Pages WITH header/footer */}
      <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/burgers" element={<BurgersPage />} />
        <Route path="/menu/desserts" element={<DessertsPage />} />
        <Route path="/menu/pizzas" element={<PizzasPage />} />
        <Route path="/menu/soft-drinks" element={<SoftDrinksPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Route>

                     {/* Pages WITHOUT header/footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
    </Routes>
  );
}