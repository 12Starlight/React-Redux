import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore; 

  // code to test on the window
  window.store = store; 


  const root = document.getElementById('content');
  ReactDOM.render(<h1>Todo App</h1>, root);
});