
import { CartProvider } from "./features/cart/CartContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserProvider } from "./features/user/UserContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
         <UserProvider>
        <App />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);