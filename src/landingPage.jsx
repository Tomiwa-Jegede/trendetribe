//all import are decleared here
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

//the landing page components
const LandingPage = () => {
  return (
    <>
      <div className="flex h-[100dvh] flex-col items-center justify-center text-center">
        {/*--render slogan here------*/}
        <h1 className="z-10 mb-[2rem] origin-bottom overflow-hidden text-[3.5rem] text-white">
          Online <br />
          <span className="bg-secondary-color animate-slant inline-block rounded-[50px] px-[1.5rem] text-white opacity-0">
            Marketplace
          </span>
          <br />
          At Your
          <br />
          Fingertip
        </h1>
        {/*--render sub-slogan here------*/}
        <h4 className="text-primary-color z-10 mb-[2rem] text-[1.3rem]">
          Your Ultimate Shopping Experience Minus The Crowds.
        </h4>
        {/*--wrap button here------*/}
        <div className="text-primary-color animate-fadeIn02 z-10 mb-[2rem] flex w-[80%] origin-bottom justify-between text-[1rem] opacity-0 delay-[2s]">
          <Link to="/shopCartegory">
            {/*--useded button components for the button--*/}
            <Button label="SHOP NOW" sublabel="(Buyer)" background='secondary-color'/>
          </Link>
          <a href="#">
            {/*--useded button components for the button--*/}
            <Button label="POST NOW" sublabel="(Seller)" background='secondary-color' />
          </a>
        </div>
        {/*--render socil-media icons here--*/}
        <div className="text-primary-color z-10 flex w-[20%] justify-between text-[2rem]">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
