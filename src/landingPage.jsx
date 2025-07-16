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
        <h1 className="z-10 mb-[2rem] origin-bottom overflow-hidden text-[3.5rem] text-white md:text-[5rem]">
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
        <h4 className="text-primary-color z-10 mb-[2rem] text-[1.3rem] md:text-[1.7rem]">
          Your Ultimate Shopping Experience Minus The Crowds.
        </h4>
        {/*--wrap button here------*/}
        <div className="animate-fadeIn02 delay-[2s z-10 mb-[2rem] flex w-[80%] origin-bottom justify-between opacity-0 md:w-[60%]">
          <Link to="/shopCartegory">
            {/*--useded button components for the button--*/}
            <Button
              color="primary-color"
              label="SHOP NOW"
              sublabel="(Buyer)"
              background="secondary-color"
            />
          </Link>
          {/*--useded button components for the button--*/}
          <Link to="/pricing">
            <Button
              color="primary-color"
              label="POST NOW"
              sublabel="(Seller)"
              background="secondary-color"
            />
          </Link>
        </div>
        {/*--render social-media icons here--*/}
        <div className="text-primary-color z-10 flex w-[20%] justify-between text-[2rem] md:w-[18%] md:text-[3rem]">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
