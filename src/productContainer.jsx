import React, { useContext } from 'react'; // imported the useContext hook from react
import Button from './Button'; //imported the button component
import { CartContent } from './cartContent'; // imported the cart
const ProductContainer = ({
  //product container props
  id = '',
  image = '',
  name = '',
  price = '',
  availability = '',
}) => {
  //used the useContext hook to access the addToCart function
  const { addToCart } = useContext(CartContent);

  //return the product container
  return (
    <div className="flex w-fit md:w-[15rem] flex-col items-center rounded-[5px] bg-[#0000001f] p-2 md:p-5">
      {/*------------product Image---------------*/}
      <img
        className="mb-2 h-[10rem] w-[10rem] md:h-[13rem] md:w-[13rem] rounded-[5px] object-cover"
        src={image}
        alt=""
      />

      {/*This is a div to wrap the product(name, price & availibility) */}
      <div className="text-secondary-color mb-2 w-full text-[1.1rem] md:text-[1.5rem]">
        {/*----------------------product Name-----------------*/}
        <div className="mb-1">{name}</div>

        {/*-----------------------product Price---------------*/}
        <div>&#8358;{price}</div>

        {/*-----------------product availibility-----------------*/}
        <div>{availability}</div>
      </div>

      {/*------used the button component here-----------*/}
      <Button
        onClick={() => {
          addToCart(id);
        }}
        color="white"
        label="ADD TO CART"
        background="secondary-color"
      />
    </div>
  );
};

export default ProductContainer;
