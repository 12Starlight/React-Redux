// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directory Files
import entitiesReducer from './entities_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer 
});


export default rootReducer; 







