// Import Constants
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


// Build Pokemon Reducer
const pokemonReducer = (oldState = {}, action) {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let allPokemon = Object.assign({}, oldState, action.pokemon); 
      return allPokemon; 
    default:
      return oldState; 
  } 
}


export default pokemonReducer; 





