import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [quantity, setQuantity] = useState(0);

  function addItem() {
    setQuantity(q => q + 1)
  }

  function removeItem() {
    setQuantity(q => q - 1)
  }

  return (
    <CartContext.Provider value={{ quantity, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const ctx = useContext(CartContext)

  if (!ctx) {
    throw new Error("useCart must be wraped in CartProvider!")
  }

  return ctx
}

export { useCart, CartProvider }