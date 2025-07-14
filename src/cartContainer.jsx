//all import are decleared  here
import React, { useState, useEffect } from 'react';
import { products } from './js/product';
import { CartContent } from './cartContent';
//cart component to store cartItems; passed the chilren props(anything wraped in cart has aceess to cart)
const Cart = ({ children }) => {
  //used the useState function to add and remove items for this projust
  const [cart, setCart] = useState(() => {
    {
      /*---placed an intial value into the cart----*/
    }
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      //used to catch for any error
      console.error('failed', e);
      return [];
    }
  });
  //updateCart
  const updateCart = (id, newQty) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item,
      ),
    );
  //remove From Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  //added to cart
  const addToCart = (id) => {
    //loop through the products to find the products
    const product = products.find((product) => product.id === id);
    //update the set cart with product
    setCart((prevCart) => {
      //check if the productId is equal to id of the product in the cart
      if (prevCart.find((item) => item.id === id)) {
        //if it is, do not push anything
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      //put the product in the cart
      return [...prevCart, product];
    });
  };

  //used to run what happens after the cart has been set. save to the global storage
  useEffect(() => {
    if (Array.isArray(cart)) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <>
      {/*-------use the .provider method so the you will have full access to the content for the product*/}
      <CartContent.Provider
        value={{ cart, addToCart, updateCart, removeFromCart }}
      >
        {children}
      </CartContent.Provider>
    </>
  );
};

export default Cart;
