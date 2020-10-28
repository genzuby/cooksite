import React from 'react';
import styled from 'styled-components';
import Search from '../components/home/Search';
import CardMenu from '../components/home/CardMenu';

const Home = (props) => {
  return (
    <HOME>
      <Search />
      <CardMenu />
      <div className='imgarea'></div>
    </HOME>
  );
};

const HOME = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 70% 30%;
  grid-template-areas:
    ' search img '
    ' menu img ';
  .imgarea {
    grid-area: img;
    background: url('./assets/images/home.jpg') no-repeat;
    background-size: cover;
  }
`;

export default Home;
