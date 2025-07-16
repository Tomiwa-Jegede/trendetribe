//all import here;
import React, { useContext } from 'react';
import { CartContent } from './cartContent';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartBtnComponent from './cartBtnComponent';
import Button from './Button';
import { Link } from 'react-router-dom';
const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

//cart container
const CartPage = () => {
  // useContext bring in the cart content to the page
  const { cart: cartItems } = useContext(CartContent);
  //price total of items in the cart
  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  return (
    <>
      <div className="h-[100dvh] pt-[5rem] md:pt-[8rem]">
        {/*-------------cart nav bar--------------*/}
        <nav className="text-secondary-color flex justify-center text-[1.5rem] md:text-[3rem]">
          Cart
        </nav>
        <nav
          className={`${cartItems.length === 0 ? 'flex' : 'hidden'} text-secondary-color flex justify-center text-[2rem] md:text-[3rem]`}
        >
          Your Cart Is Empty
        </nav>

        {/*-------------wraps all the contents in the cart--------------*/}
        <div
          className={`${cartItems.length === 0 ? 'hidden' : 'flex'} flex-col`}
        >
          {/*-------------cart header--------------*/}
          <ul className="grid grid-cols-5 place-items-center border border-[#00000054] md:text-[2rem]">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>

          {/*-------------get the items that are in the cart--------------*/}
          {cartItems.map((item) => {
            //converted the image here so that react can use it
            const imgSrc = images[item.img];
            //returns the products in the cart
            return (
              <React.Fragment key={item.id}>
                <ul className="grid grid-cols-5 place-items-center border border-[#0000001c] p-2 md:text-[1.8rem]">
                  {/*----cart product image---*/}
                  <li className="flex items-center justify-center">
                    <img src={imgSrc} alt="" />
                  </li>
                  {/*----cart product price---*/}
                  <li>&#8358;{item.price}</li>
                  {/*----cart product button---*/}
                  <li className="flex items-center justify-center">
                    {/*----add and subtract button(using component) & displaying the quantity here----*/}
                    <CartBtnComponent id={item.id} label="-" />
                    {item.quantity}
                    <CartBtnComponent id={item.id} label="+" />
                  </li>

                  <li className="flex items-center justify-center">
                    &#8358;{item.price * item.quantity}
                  </li>
                  {/*----cancel button rendering with components---*/}
                  <li>
                    <CartBtnComponent
                      id={item.id}
                      label={<FontAwesomeIcon icon={faXmark} />}
                    />
                  </li>
                </ul>
              </React.Fragment>
            );
          })}
        </div>
        {/*This is the container for the order summary*/}
        <div
          className={`${cartItems.length === 0 ? 'hidden' : 'flex'} items-center p-2`}
        >
          <ul className="w-full">
            <li className="text-secondary-color border-[#0000001c border] flex items-center justify-center border border-[#0000001c] p-2 text-3xl md:text-[3rem]">
              Order Summary
            </li>
            <li className="border border-[#0000001c] p-2 text-[1.2rem] md:text-[1.8rem]">
              <span className="text-secondary-color text-xl md:text-[2rem]">
                Sub-Total:{' '}
              </span>
              &#8358;{total}
            </li>
            <li className="border border-[#0000001c] p-2 text-[1.2rem] md:text-[1.8rem]">
              <span className="text-secondary-color text-xl md:text-[2rem]">
                Shipping:{' '}
              </span>
              Pickup ONLY
            </li>
            <li className="border border-[#0000001c] p-2 text-[1.2rem] md:text-[1.8rem]">
              <span className="text-secondary-color text-xl md:text-[2rem]">
                Total:{' '}
              </span>
              &#8358;{total}
            </li>
            <li className="text-secondary-color flex items-center justify-center border border-[#0000001c] p-2">
              <Link to="/accForProduct">
                <Button
                  label="CHECKOUT"
                  color="white"
                  background="secondary-color"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartPage;
