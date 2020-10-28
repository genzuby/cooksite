import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchOptionContext } from '../../context/SearchOptionContext';

const CardMenu = () => {
  const { searchOption, setSearchOption } = useContext(SearchOptionContext);

  const setContext = (option) => {
    setSearchOption(option);
    console.log(searchOption);
  };

  return (
    <CARDMENU>
      <CARD backimg='recipes.jpg' onClick={() => setContext('recipe')}>
        Search Recipe
      </CARD>
      <CARD backimg='ingredients.jpg' onClick={() => setContext('ingredient')}>
        Recipe by Ingredients
      </CARD>
      <CARD backimg='vegan.jpg' onClick={() => setContext('vegan')}>
        Search Vegan Recipe
      </CARD>
      <CARD backimg='random.jpg' onClick={() => setContext('random')}>
        Random Recipe
      </CARD>
    </CARDMENU>
  );
};

const CARDMENU = styled.div`
  grid-area: menu;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CARD = styled.div`
  width : 7em;
  height  7em;
  border-radius : 50%;
  margin  : 0 2em;
  display : flex;
  align-items: center;
  justify-content : center;
  text-align: center;
  font-size : .9em;
  text-weight : 100;
  color : #fff;
  text-shadow : 1px 1px 0 rgba(0,0,0,0.4);
  background : url(${(props) => `./assets/images/${props.backimg}`}) no-repeat;
  background-size: cover;
  background-position: center;
  cursor : pointer;
  position: relative;
  transition: all .3s ease-out;
  top: 0;

  &:hover {
    top: -10px;
  }
`;

export default CardMenu;
