import React from 'react'
import ReactDOM from 'react-dom'

// Import Local Directories
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); 
  
  // code to test on the window
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.dispatch = store.dispatch; 
  window.getState = store.getState; 
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, root)
});



