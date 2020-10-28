import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const RecipeInfo = ({ recipeInfo }) => {
  console.log(recipeInfo);
  return <div>recipeinfo</div>;
};

const mapStatToProps = (state) => {
  return {
    recipeInfo: state.recipeInfo,
  };
};

const RECIPEINFO = styled.div``;

export default connect(mapStatToProps)(RecipeInfo);
