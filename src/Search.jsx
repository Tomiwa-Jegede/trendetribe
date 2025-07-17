import React, { useState } from 'react';
import { SearchContent } from './cartContent';

const Search = ({ children, currentProduct }) => {
  const [SearchResults, setSearchResults] = useState(currentProduct);
  const handleChange = (e) => {
    const SearchTerm = e.target.value.trim().toLowerCase();
    const MatchingProduct = currentProduct.filter((product) =>
      product.name.toLowerCase().includes(SearchTerm),
    );
    setSearchResults(MatchingProduct);
  };
  return (
    <>
      <SearchContent.Provider value={{ SearchResults, handleChange }}>
        {children}
      </SearchContent.Provider>
    </>
  );
};

export default Search;
