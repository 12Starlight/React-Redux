// Import Constants
import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';


// Build Main Reducer
const giphysReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    default:
      return oldState; 
  }
};


export default giphysReducer; 