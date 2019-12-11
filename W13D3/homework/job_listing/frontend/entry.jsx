// react/ redux imports
import React from 'react';
import ReactDOM from 'react-dom';

// component imports
import Widget from './components/widget';
import store from './store';
import { selectLocation } from './actions'; 
import reducer from './reducer';

document.addEventListener("DOMContentLoaded", () => {
  // code to test on the window
  window.selectLocation = selectLocation;
  window.reducer = reducer; 


  const root = document.getElementById('root');
  ReactDOM.render(<Widget store={store} />, root);
});










