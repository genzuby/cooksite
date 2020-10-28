import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
  return (
    <MENU>
      <NavLink to='/'>
        <div className='logo'>Logo</div>
      </NavLink>
      <div className='menu'>
        <NavLink to='/recipes'>
          <div>Recipes</div>
        </NavLink>
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
