// Build Constants
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

// Regular Action Creator
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});



