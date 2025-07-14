//all imports are decleared here
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HomeNav from './homeNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useLocation } from 'react-router-dom';
//used the layout here so i can have a fixed nav bar that i can use across mutiple pages
const Layout = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === '/cart') return 'Cart';
    if (location.pathname === '/fashion') return 'Fashion';
    if (location.pathname === '/jersy') return 'Jersey';
    if (location.pathname === '/accessories') return 'Accessories';
    if (location.pathname === '/pricing') return 'Pricing';
    if (location.pathname === '/accForPlan') return 'Account Details';
    if (location.pathname === '/accForProduct') return 'Account Details';
    return 'Shop By Cartegory';
  };
  return (
    <div>
      {/*--------This is the code for the nav------*/}
      <HomeNav
        color="white"
        background="secondary-color"
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        cartIcon={<FontAwesomeIcon icon={faShoppingCart} />}
        content={getTitle()}
      />
      {/*-------this are all the content on the page-------*/}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
