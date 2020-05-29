import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/home/Menu';
import Recipes from './pages/Recipes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap');
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
  }
  a{
    text-decoration: none;
  }
`;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Menu />
      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={Recipes} />
    </BrowserRouter>
  );
}

export default App;
