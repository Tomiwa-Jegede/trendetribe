import React, { useEffect, useState } from 'react';
import { vendorPlans } from './js/product.js';
import { VendorCartContent } from './cartContent';
import { useNavigate } from 'react-router-dom';

const VendorPlansCart = ({ children }) => {
  const navigate = useNavigate();
  //handle the vendor cart
  const [vendorCart, setVendorCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('vendorCart')) || [];
    } catch (err) {
      console.error('there was an error', err);
      return [];
    }
  });
  //handleClick
  const handleClick = (id) => {
    const selectedPlan = vendorPlans.find((item) => item.id === id);
    const inCart = vendorCart.some((prevCart) => prevCart.id === id);
    setVendorCart((prevCart) => (inCart ? prevCart : [selectedPlan]));

    if (selectedPlan.price === 'Free') {
      const phoneNum = '09166635320';
      const message = `*PLAN*\n I would like the ${selectedPlan.name}\nTotal:${selectedPlan.price}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsApp = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
      window.open(whatsApp, '_blank');
    } else {
      navigate('/accForPlan');
    }
  };
  useEffect(() => {
    const saveData = JSON.stringify(vendorCart);
    localStorage.setItem('vendorCart', saveData);
  }, [vendorCart]);

  return (
    <VendorCartContent.Provider value={{ handleClick, vendorCart }}>
      {children}
    </VendorCartContent.Provider>
  );
};

export default VendorPlansCart;
