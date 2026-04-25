import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
// key properties for items in the cart
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
// Type definition for the cart context value
type CartContextType = {
  cartItems: CartItem[];
  toastMessage: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
};
// Create the cart context with an initial value of null
const CartContext = createContext<CartContextType | null>(null);



// CartProvider component to wrap the app and provide cart state
export function CartProvider({ children }: { children: ReactNode }) {

// State for items in the cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
// State for temporary toast messages when items are added to the cart
  const [toastMessage, setToastMessage] = useState<string | null>(null);





//function to add item to cart
  const addToCart = (item: CartItem) => {

    setCartItems((prev) => {
  const exists = prev.find((i) => i.id === item.id);

  if (exists) {
    return prev.map((i) =>
      i.id === item.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  }

  return [...prev, { ...item, quantity: 1 }];
});





    // shows temporary message when item is added
 setToastMessage("Item added to cart");
  setTimeout(() => {  // clears message after 1.5 seconds
    setToastMessage(null);
  }, 1500);

  };



//function to remove item from cart by id
const removeFromCart = (id: string) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};



// Provide the cart state and functions to the context consumers
  return (
    <CartContext.Provider value={{ cartItems,toastMessage, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
// Custom hook to use the cart context in components
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}