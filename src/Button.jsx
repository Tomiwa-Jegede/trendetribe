// all import are decleared here
import React, { useState } from 'react';

//button component
const Button = ({
  label = 'ADD TO CART',
  addedLabel = 'ADDED',
  sublabel = '',
  background = 'white',
  color = '',
  onClick = () => {},
}) => {
  //useState to change button text when clicked
  const [isClicked, setIsClicked] = useState();
  //click event
  const handleClick = () => {
    onClick();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };
  //return the button used to add to cart
  return (
    <button
      onClick={handleClick}
      className={`bg-${background} rounded-[10px] border px-[2rem] py-[.5rem] text-[.9rem] md:px-[2rem] md:py-[.8rem] md:text-[1.2rem] ${
        color === 'black' ? 'text-black' : ''
      } ${color === 'primary-color' ? 'text-primary-color' : ''} ${color === 'white' ? 'text-white' : ''}`}
    >
      {!isClicked ? label : addedLabel}
      <br />
      {sublabel}
    </button>
  );
};

export default Button;
