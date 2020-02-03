// React Redux Imports
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Component Imports
import { fetchSearchGiphys } from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  // const store = configureStore(preloadedState);

  // code to test
  window.fetchSearchGiphys = fetchSearchGiphys


  ReactDOM.render(<div>React is working ;)</div>, root);
});