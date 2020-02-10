import React from 'react'
import ReactDOM from 'react-dom'

// Import Local Directories
// import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); 
  
  // code to test on the window
  // window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon; 
  window.receiveAllPokemon = receiveAllPokemon;
  window.dispatch = store.dispatch; 
  window.getState = store.getState; 
  window.selectAllPokemon = selectAllPokemon; 
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root) // store is the prop 
});



