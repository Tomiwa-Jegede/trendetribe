//rendered all the imports
import React from 'react';
import ProductContainer from './productContainer.jsx';
import Cart from './cartContainer.jsx';
const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
//this is the component to create a new projuct page
const PageGenerator = ({ products = [] }) => {
  return (
    //used a div to wrap all the content that are present on the page
    <div className="h-[100dvh] pt-[5rem]">
      {/*--------this is the header of the page-------*/}
      <h1 className="text-secondary-color pb-[1rem] text-center text-[1.5rem]">
        Featured Products
      </h1>
      {/*------wrap all the generated product here------*/}
      <div className="grid grid-cols-2  items-start justify-items-center gap-2 p-2">
        {/*----looped through the products to get all the poducts in the folder*/}
        {products.map((product) => {
          {/*-----imported the image so that react can use it-------*/}
          const image = images[product.img];
          console.log(image)
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
  );
};
export default PageGenerator;
