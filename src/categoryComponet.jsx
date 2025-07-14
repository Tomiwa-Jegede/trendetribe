// all import are decleared here
import React from 'react';
//component for the categories
const CategoryComponet = ({ image = '', name = '' }) => {
  return (
    <div>
      <div className="bg-secondary-color relative z-[1] mt-[1rem] flex w-[10rem] flex-col items-center rounded-[5px] p-[1rem] text-center">
        {/*-------image in the category section-------*/}
        <div className="mb-[.5rem] h-[8rem] w-[8rem]">
          <img
            src={image}
            alt="FASHION"
            className="h-full w-full rounded-[5px] object-cover"
          />
        </div>
        {/*-------name(of categories) in the category section-------*/}
        <div className="text-white">{name}</div>
      </div>
    </div>
  );
};

export default CategoryComponet;
