import { combineReducers } from 'redux';
import fetchRecipeInfoById from './fetchRecipeInfoById';

export default combineReducers({
  recipeInfo: fetchRecipeInfoById,
});
