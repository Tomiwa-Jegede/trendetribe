// all import are decleared here
import React, { useContext, useEffect, useState } from 'react';
import { CartContent } from './cartContent';

const CartBtnComponent = ({ label = '', id }) => {
  //cart was decleared here
  const { cart, updateCart, removeFromCart } = useContext(CartContent);
  //get item in the cart
  const cartItem = cart.find((item) => item.id === id);
  //useEffect to sync local cartQuntity to global cartQuantity
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);
  //useState to handle cart Quantity
  const [quantity, setQuantity] = useState(cartItem.quantity || 0);
  //handleClick
  const handleClick = () => {
    let newQty = quantity;
    if (label === '-') {
      newQty = Math.max(quantity - 1, 1);
    } else if (label === '+') {
      newQty = quantity + 1;
    } else {
      removeFromCart(id);
    }
    setQuantity(newQty);
    updateCart(id, newQty);
  };

  return (
    <button
      className="bg-secondary-color m-1 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-[50px] border border-none p-3 text-white md:p-[1.2rem]"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default CartBtnComponent;
