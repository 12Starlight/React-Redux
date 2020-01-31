import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const names = [
    "Arron",
    "Timmy",
    "Sasha",
    "Zoey",
    "Zip",
    "Chimmy",
    "Tote",
    "Aria",
    "Ned",
    "Snow",
    "Eisa"
  ];


  const root = document.getElementById('content');
  ReactDOM.render(<Root names={names} />, root);
});