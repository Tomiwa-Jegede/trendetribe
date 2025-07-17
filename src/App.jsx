// all import are decleared here
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Layout from './layout';
import ShopCartegory from './shopCartegory';
import PageGenerator from './pageGenerator';
import Cart from './cartContainer';
import { accessories, jersey, products } from './js/product';
import CartPage from './cart';
import Price from './price';
import VendorPlansCart from './vendorPlansCart';
import AccountForPlan from './accForPlan';
import AccountForProducts from './accForProduct';
import Search from './Search';

const App = () => {
  return (
    //wrapped with cart so that i can have all the content in the cart
    <Router>
      <Cart>
        <VendorPlansCart>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="/shopCartegory" element={<ShopCartegory />} />

              <Route
                path="/fashion"
                element={
                  <Search currentProduct={products}>
                    {' '}
                    <PageGenerator state="Fashion" products={products} />{' '}
                  </Search>
                }
              />

              <Route
                path="/jersy"
                element={
                  <Search currentProduct={jersey}>
                    <PageGenerator products={jersey} />{' '}
                  </Search>
                }
              />
              <Route
                path="/accessories"
                element={
                  <Search currentProduct={accessories}>
                    <PageGenerator products={accessories} />{' '}
                  </Search>
                }
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/accForProduct" element={<AccountForProducts />} />
              <Route path="/accForPlan" element={<AccountForPlan />} />
              <Route path="/pricing" element={<Price />} />
            </Route>
          </Routes>
        </VendorPlansCart>
      </Cart>
    </Router>
  );
};

export default App;
