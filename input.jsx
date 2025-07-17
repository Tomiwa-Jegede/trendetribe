import React, { useContext } from 'react';
import { SearchContent } from './cartContent';

const Input = () => {
  const { handleChange } = useContext(SearchContent);
  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Search products..."
      className="border-secondary-color outline-light-sec-color mb-[.5rem] w-[20rem] rounded-[5px] border p-2 md:text-[1.5rem] lg:w-[30rem] lg:text-[2rem]"
    />
  );
};

export default Input;
