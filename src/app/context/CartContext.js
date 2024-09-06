"use client";

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartItemCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addItemToCart, cartItemCount}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);