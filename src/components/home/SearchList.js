import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRecipeInfoById } from '../../redux/actions';
import styled from 'styled-components';

const SearchList = ({ ListItems, KeyFocus, BackInput, getRecipeInfoById }) => {
  let refList = [];
  const history = useHistory();

  useEffect(() => {
    if (KeyFocus) refList[0].focus();
    else return;
  }, [KeyFocus, refList]);

  const getRecipeInfo = (id) => {
    getRecipeInfoById(id);
    history.push('/recipeinfo');
  };

  const onListKeyDown = (e, pos, id) => {
    switch (e.keyCode) {
      case 13: //enter keydown
        getRecipeInfo(id);
        break;
      case 27: //esc key
        BackInput();
        break;
      case 38: // up arrow
        if (pos === 0) return;
        refList[pos - 1].focus();
        break;
      case 40: //down arrow
        if (refList.length === pos + 1) return;
        refList[pos + 1].focus();
        break;
      default:
    }
  };

  if (ListItems === []) return;

  return ListItems.map((recipe, i) => (
    <LISTITEM
      key={i}
      tabIndex='0'
      ref={(el) => (refList[i] = el)}
      onKeyDown={(e) => onListKeyDown(e, i, recipe.id)}
      onClick={() => getRecipeInfo(recipe.id)}
    >
      {recipe.title}
    </LISTITEM>
  ));
};

const LISTITEM = styled.li`
  padding: 0.3em 1em;
  font-size: 0.95em;
  font-weight: 100;
  outline: none;

  &:hover,
  &:focus {
    background: #eafce6;
    cursor: pointer;
  }
`;

SearchList.propTypes = {
  ListItems: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
  KeyFocus: PropTypes.bool,
  BackInput: PropTypes.func,
  getRecipeInfoById: PropTypes.func,
};

export default connect('', { getRecipeInfoById })(SearchList);
