import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <SEARCH>
      <h1>Today's Recipes</h1>
      <INPUT placeholder='Input food or ingredient' />
    </SEARCH>
  );
};

const SEARCH = styled.div`
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  h1 {
    font-size: 2.5em;
  }
`;

const INPUT = styled.input`
  padding: 0.5em 1em;
  font-size: 1.1em;
  border: 1px solid #ccc;
  color: #262626;
  width: 300px;
`;

export default Search;
