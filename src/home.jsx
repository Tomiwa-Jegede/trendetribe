// all import are decleared here
import React from 'react';
import HomeNav from './homeNav';
import LandingPage from './landingPage';
const Home = () => {
  return (
    <>
      {/*--------used to wrap the page content------*/}
      <div className="relative flex h-[100dvh] justify-center bg-[url(./assets/hero-section-mobile.png)] before:absolute before:inset-0 before:z-0 before:border before:bg-black before:p-[1rem] before:opacity-[0.7] before:content-['']">
        {/*--------This is the code for the dropDown------*/}
        <HomeNav color='primary-color' content='TRENDEE TRIBE'/>
        {/*--------This is the code for the body------*/}
       <LandingPage/>
      </div>
    </>
  );
};

export default Home;
