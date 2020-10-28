import spoonapi from '../../api/spoonacularApi';
import { SPOONAPI_KEY } from '../../apiinfo';
import { FETCH_RECIPE_INFO } from './actionInfo';

export const getRecipeInfoById = (id) => async (dispatch) => {
  const response = await spoonapi.get(
    `recipes/${id}/information?apiKey=${SPOONAPI_KEY}`
  );

  if (response.data) {
    dispatch({
      type: FETCH_RECIPE_INFO,
      payload: response.data,
    });
  } else {
    return;
  }
};
