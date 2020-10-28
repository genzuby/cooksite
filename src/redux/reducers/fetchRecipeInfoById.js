import { FETCH_RECIPE_INFO } from '../actions/actionInfo';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE_INFO:
      return action.payload;
    default:
      return state;
  }
};
