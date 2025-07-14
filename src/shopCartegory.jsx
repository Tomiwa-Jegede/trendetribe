//decleared all the imports here
import React from 'react';
import HomeNav from './homeNav';
import CategoryComponet from './categoryComponet';
import { categoriesContainer } from './js/categoriesContainer.js';
import { Link } from 'react-router-dom';
const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const ShopCartegory = () => {
  return (
    <>
      <div className="bg-[url(./assets/hero-section-mobile.png)]">
        {/*--------This is the code for the categories------*/}
        <div className="before:content-'' h-[100dvh] before:absolute before:inset-0 before:z-[0] before:bg-black before:opacity-[0.7]">
          <div className="grid grid-cols-2 items-start justify-items-center pt-[3.5rem]">
            {/*------looped throuhg the cartegories to get the cartegorys--------*/}
            {categoriesContainer.map((categorie) => {
              {
                /*------imported the image in a way that react can use it---------*/
              }
              const imageSrc = images[categorie.img];
              return (
                <Link key={categorie.name} to={categorie.link}>
                  {/*------render the cartegory components here-------*/}
                  <CategoryComponet image={imageSrc} name={categorie.name} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCartegory;
