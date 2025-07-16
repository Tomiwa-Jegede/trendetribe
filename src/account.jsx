import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { CartContent, VendorCartContent } from './cartContent';
import { useLocation } from 'react-router-dom';

const AccountNumber = ({ total = '' }) => {
  const { cart: cartItems } = useContext(CartContent);
  const { vendorCart } = useContext(VendorCartContent);
  const [copied, setCopied] = useState(false);
  //account number
  const accNum = '2049085596';
  const location = useLocation();
  //handleIHavePaid
  const handlePaid = () => {
    if (location.pathname === '/accForProduct') {
      const phoneNum = '09166635320';
      const order = '*Your Order*\n';
      const message = cartItems.map((item) => {
        const message = `${item.name} - X${item.quantity}\nTotal: ₦${item.price}`;
        return message;
      });
      const encodedMessage = encodeURIComponent(order + message);
      const whatsApp = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
      window.open(whatsApp, '_blank');
    } else {
      vendorCart.map((item) => {
        const phoneNum = '09166635320';
        const message = `*PLAN*\n I would like the ${item.name}\nTotal: ₦${item.price}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsApp = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
        window.open(whatsApp, '_blank');
      });
    }
  };
  //handleCopy
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accNum);
      setCopied(true);
    } catch (err) {
      console.error('Failed To Copy', err);
    }
  };
  //useEffect to show copied after it has been copied
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);
  return (
    <div
      className={`${location.pathname === '/accForProduct' && cartItems.length === 0 ? 'hidden' : 'flex'} flex h-[100dvh] items-center justify-center`}
    >
      <div className="border border-[#0000001a]">
        <ul>
          <li className="text-secondary-color flex items-center justify-center p-2 text-3xl">
            Account Details
          </li>
          <li className="border border-[#0000001a] p-2 text-[1.2rem]">
            <span className="text-secondary-color text-2xl">Bank: </span>
            Kuda
          </li>
          <li className="relative border border-[#0000001a] p-2 text-[1.2rem]">
            <span className="text-secondary-color text-2xl">
              Account Number:
            </span>
            2049085596
            <button
              onClick={handleCopy}
              className="text-secondary-color hover:cursor-pointer"
            >
              {<FontAwesomeIcon icon={faCopy} />}
            </button>
            <div
              className={`${copied ? 'visible' : 'hidden'} absolute top-[-2rem] right-[-2.5rem] rounded-[1rem] bg-[#00000031] p-2 text-[white]`}
            >
              Copied
            </div>
          </li>
          <li className="border border-[#0000001a] p-2 text-[1.2rem]">
            <span className="text-secondary-color text-2xl">
              Account Name:{' '}
            </span>
            Tomiwa Jegede
          </li>
          <li className="border border-[#0000001a] p-2 text-[1.2rem]">
            <span className="text-secondary-color text-2xl">Total: </span>
            &#8358;{total}
          </li>
          <li className="flex items-center justify-center p-2">
            <Button
              color="white"
              label="I HAVE PAID"
              background="secondary-color"
              onClick={() => {
                handlePaid();
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountNumber;
