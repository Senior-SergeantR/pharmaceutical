import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`
    };
    setCartItems([...cartItems, cartItem]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.cartId !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
