import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
  return (
    <MENU>
      <Link to='/'>
        <div className='logo'>Logo</div>
      </Link>
      <div className='menu'>
        <Link to='/recipes'>
          <div>Recipes</div>
        </Link>
        <div>ingredients</div>
        <div>Login</div>
      </div>
    </MENU>
  );
};

const MENU = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  font-size: 0.9em;
  background: transparent;
  .menu {
    display: flex;
    div {
      padding: 0 0.7em;
      color: #262626;
      font-weight: 100;
      cursor: pointer;
      &:hover {
        color: #28bd2d;
      }
    }
  }
`;

export default Menu;
