// Import React Redux
import { combineReducers } from 'redux';

// Import Local Directories
import pokemonReducer from './pokemon_reducer';


const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
});


export default entitiesReducer; 
