// all import are decleared here
import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { CartContent } from './cartContent';

//nav bar is rendered here
const HomeNav = ({
  icon = '',
  content = '',
  cartIcon = '',
  color = '',
  background = '',
}) => {
  //used useState to open and close the  dropdown nav
  const [dropDown, setDropDown] = useState(false);
  //access the content in the cart with cartContent
  const { cart } = useContext(CartContent);
  //allows you to go back one page when you click it
  const back = () => {
    window.history.go(-1);
  };
  return (
    <>
      {/*--------This is the code for the navBar------*/}
      <nav
        className={`${content === 'TRENDEE TRIBE' ? 'animate-fadeIn' : 'animate-none'} text-${color}  fixed z-50 flex w-full origin-bottom justify-between p-[1rem] bg-${background}`}
      >
        <div className="flex  items-center justify-between text-[1.3rem]">
          {/*--------backIcon------*/}
          <div className={`${icon === '' ? 'hidden' : 'flex'} mr-3`} onClick={back}>
            {icon}
          </div>
          {content}
        </div>
        {/*--------cart & menu container------*/}
        <div
          className={`items-center justify-between ${cart ? 'flex w-[12%]' : ''}`}
        >
          {/*--------cartIcon------*/}
          <div className="relative">
            <div
              className={`${cartIcon ? 'flex' : 'hidden'} bg-primary-color text-secondary-color absolute top-[-.7rem] right-[-.5rem] flex h-[1rem] w-[1rem] items-center justify-center rounded-[1rem] p-[.5rem] text-[.8rem]`}
            >
              {cart.length || 0}
            </div>
            <Link to="/cart">{cartIcon}</Link>
          </div>
          {/*--------barIcon------*/}
          <div
            onClick={() => {
              setDropDown(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {/*--------dropDown Container------*/}
        <div
          className={`flex bg-white ${
            dropDown ? 'w-[50%]' : 'w-[0%]'
          } absolute top-0 right-0 overflow-hidden transition-all`}
        >
          {/*--------wrap all the icons here------*/}
          <ul>
            {/*--------cancel Icon------*/}
            <li
              className="text-secondary-color absolute top-2 right-5"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </li>
            {/*--------home Icon------*/}
            <li
              className="text-secondary-color mx-[1rem] my-[3rem] p-[.2rem] hover:text-blue-600"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <Link to="/">
                Home <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            {/*--------cart Icon------*/}
            <li
              className="text-secondary-color mx-[1rem] my-[3rem] p-[.2rem] hover:text-blue-600"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <Link to="/cart">
                Cart <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            {/*--------shop Icon------*/}
            <li
              className="text-secondary-color mx-[1rem] my-[3rem] p-[.2rem] hover:text-blue-600"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <Link to="/shopCartegory">
                Shop <FontAwesomeIcon icon={faShop} />
              </Link>
            </li>
            {/*--------pricing Icon------*/}
            <li
              className="text-secondary-color mx-[1rem] my-[3rem] p-[.2rem] hover:text-blue-600"
              onClick={() => {
                setDropDown(false);
              }}
            >
              <Link to='/pricing'>
                Pricing
                <FontAwesomeIcon icon={faMoneyBill1Wave} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
