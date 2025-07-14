import React, { useContext } from 'react';
import AccountNumber from './account';
import { CartContent } from './cartContent';

const AccountForProducts = () => {
  const { cart: cartItems } = useContext(CartContent);
  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  return <AccountNumber total={total} />;
};

export default AccountForProducts;
