// React Redux Imports
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Component Imports
import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys } from './actions/giphy_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  // code to test
  window.fetchSearchGiphys = fetchSearchGiphys;
  window.receiveSearchGiphys = receiveSearchGiphys; 
  window.store = store; 


  ReactDOM.render(<div>React is working ;)</div>, root);
});






