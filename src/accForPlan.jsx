import React, { useContext } from 'react';
import AccountNumber from './account';
import { VendorCartContent } from './cartContent';

const AccountForPlan = () => {
  const { vendorCart } = useContext(VendorCartContent);
  //get the total price of the items that are in the cart
const total = vendorCart.map((item) => item.price);
  return <AccountNumber total={total} />;
};

export default AccountForPlan;
