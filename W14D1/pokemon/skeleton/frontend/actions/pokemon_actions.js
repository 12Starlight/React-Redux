// Import Local Directory Files
import * as PokemonApi from '../util/api_util';

// Build Constants
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

// Regular Action Creator
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});


// Thunk Action Creator
export const requestAllPokemon = () => (dispatch) => (
  PokemonApi.fetchAllPokemon().then(
    pokemon => dispatch(receiveAllPokemon(pokemon))
  )
); 

