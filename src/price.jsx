import React, { useContext } from 'react';
import { vendorPlans } from './js/product';
import Button from './Button';
import { VendorCartContent } from './cartContent';

const Price = () => {
  const { handleClick } = useContext(VendorCartContent);
  return (
    <div className="relative grid grid-cols-1 justify-center gap-y-4 border bg-[url(./assets/hero-section-mobile.png)] p-2 pt-[4.5rem] before:absolute before:inset-0 before:z-0 before:border before:bg-black before:p-[1rem] before:opacity-[0.7] before:content-['']">
      {vendorPlans.map((item) => (
        <ul
          key={item.id}
          className="border-primary-color bg-secondary-color z-1 list-outside list-disc border p-2 pl-6 text-white"
        >
          <li className="text-primary-color flex items-center justify-center border-b p-2 text-2xl">
            {item.name}
          </li>
          <li className="list-none p-2 text-center">
            {item.Branded_Storefront}
          </li>
          <li className="p-2">
            Post{' '}
            <span className="text-primary-color">
              {item.Free_Product_Limit}
            </span>
            of your choice
          </li>
          <li className="p-2">
            Time Required To Upload Products:{' '}
            <span className="text-primary-color">{item.Processing_Time}</span>
          </li>
          <li className="p-2">
            Photo replacement is allowed{' '}
            <span className="text-primary-color">
              {item.Photo_Update_Policy}
            </span>{' '}
            after the product has been uploaded.
          </li>
          <li className="p-2">
            {' '}
            Want to add more? Just{' '}
            <span className="text-primary-color">{item.Upgrade_Option}</span>
          </li>
          <li className="flex list-none items-center justify-center">
            <Button
              onClick={() => {
                handleClick(item.id);
              }}
              label="BUY PLAN"
              background="primary-color"
              color="black"
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Price;
