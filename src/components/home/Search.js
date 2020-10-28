import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import spoonapi from '../../api/spoonacularApi';
import { SPOONAPI_KEY } from '../../apiinfo';
import SearchList from './SearchList';
import { SearchOptionContext } from '../../context/SearchOptionContext';

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [keyFocus, setKeyFocus] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('Recipe Name');
  const [autoCompApi, setAutoCompApi] = useState();
  const [title, setTitle] = useState('Search Recipe');
  const { searchOption } = useContext(SearchOptionContext);

  let refInput;

  useEffect(() => {
    switch (searchOption) {
      case 'ingredient':
        setPlaceHolder('Ingredients Name');
        setTitle('Recipe by Ingredient');
        break;
      case 'vegan':
        setPlaceHolder('Vegan Recipe Name');
        setTitle('Search Vegan Recipe');
        break;
      case 'random':
        setTitle('Random Recipe');
        break;
      default:
        setPlaceHolder('Recipe Name');
        setTitle('Search Recipe');
        break;
    }
  }, [searchOption, setPlaceHolder, setTitle]);

  const handleChange = async (e) => {
    const param = e.target.value;
    const listItems = await spoonapi.get(
      `recipes/autocomplete?number=10&query=${param}&apiKey=${SPOONAPI_KEY}`
    );
    setRecipeList(listItems.data);
  };

  const onInputKeyDown = (e) => {
    if (e.keyCode === 27) {
      e.target.value = '';
      setRecipeList([]);
    } else if (e.keyCode === 40) {
      if (recipeList.length === 0) return;
      setKeyFocus(true);
    }
  };

  const backToInputKeyDown = () => {
    setRecipeList([]);
    setKeyFocus(false);
    refInput.focus();
  };

  return (
    <SEARCH>
      <h1>{title}</h1>
      <INPUT
        type='text'
        placeholder={`Input ${placeHolder}`}
        onChange={handleChange}
        onKeyDown={onInputKeyDown}
        ref={(el) => (refInput = el)}
      />
      <INPUTLIST border={recipeList.length}>
        <SearchList
          ListItems={recipeList}
          KeyFocus={keyFocus}
          BackInput={backToInputKeyDown}
        />
      </INPUTLIST>
    </SEARCH>
  );
};

const SEARCH = styled.div`
  grid-area: search;
  position: relative;
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
  width: 450px;
  outline: none;

  &:focus {
    border: 2px solid #31cc4d;
  }
`;

const INPUTLIST = styled.ul`
  background: #fff;
  position: absolute;
  z-index: 3;
  top: 42.5vh;
  width: 450px;
  padding: 0.5em 0;
  max-height: 40vh;
  overflow: auto;
  border: ${(props) => (props.border > 0 ? '1px solid #e6e6e6' : 'none')};
`;

export default Search;
