// Import React Redux
import { combineReducers } from 'redux';

// Import Reducers
import giphysReducer from './giphys_reducer';


// Build Reducer
export default combineReducers({ // functional reducer 
  giphys: giphysReducer
});

// More Complicated Example
// const rootReducer = combineReducers({
//   giphys: giphysReducer
// })
// 
// export default rootReducer 