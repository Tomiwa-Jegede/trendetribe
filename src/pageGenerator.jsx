//rendered all the imports
import React, { useContext } from 'react';
import ProductContainer from './productContainer.jsx';
import { SearchContent } from './cartContent.jsx';
import Input from './input.jsx';
const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
//this is the component to create a new projuct page
const PageGenerator = () => {
  const { SearchResults } = useContext(SearchContent);
  return (
    <>
      //used a div to wrap all the content that are present on the page
      <div className="flex h-[100dvh] flex-col items-center pt-[3.5rem] md:pt-[7rem] lg:pt-[5rem]">
        <Input />
        {/*--------this is the header of the page-------*/}
        <h1 className="text-secondary-color pb-[1rem] text-center text-[1.5rem] md:text-[2rem]">
          Featured Products
        </h1>
        {/*------wrap all the generated product here------*/}
        <div className="grid grid-cols-2 items-start justify-items-center gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-15">
          {/*----looped through the products to get all the poducts in the folder*/}
          {SearchResults.map((product) => {
            {
              /*-----imported the image so that react can use it-------*/
            }
            const image = images[product.img];
            return (
              //render that product container
              <ProductContainer
                id={product.id}
                key={product.id}
                image={image}
                name={product.name}
                price={product.price}
                availability={product.location}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PageGenerator;
