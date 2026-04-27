import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import CreateAccountPage from "./pages/createAccount/CreateAccountPage";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";



function App() {
  return (
    <Routes>
                      {/* Pages WITH header/footer */}
      <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>

                     {/* Pages WITHOUT header/footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
    </Routes>
  );
}

export default App;