import React from "react";
import ReactDOM from "react-dom";
import Calculator from './calculator';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Calculator />, root);
});

