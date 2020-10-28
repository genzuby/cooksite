import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { SearchOptionStore } from './context/SearchOptionContext';
import Home from './pages/Home';
import Menu from './components/home/Menu';
import Recipes from './pages/Recipes';
import RecipeInfo from './pages/RecipeInfo';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    padding : 0;
    margin : 0;
    font-family: 'Heebo', sans-serif;
    color : #262626;

    ul,li{
      list-style: none;
    }

    a{
      text-decoration: none;
    }
  }
  
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SearchOptionStore>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/recipeinfo' component={RecipeInfo} />
        </Switch>
      </SearchOptionStore>
    </BrowserRouter>
  );
}

export default App;
