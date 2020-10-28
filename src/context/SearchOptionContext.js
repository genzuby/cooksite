import React, { useState, createContext } from 'react';

export const SearchOptionContext = createContext(null);

export const SearchOptionStore = (props) => {
  const [searchOption, setSearchOption] = useState('recipe');

  return (
    <SearchOptionContext.Provider value={{ searchOption, setSearchOption }}>
      {props.children}
    </SearchOptionContext.Provider>
  );
};
