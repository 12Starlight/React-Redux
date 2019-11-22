import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const names = [
    { fname: "Arron" },
    { fname: "Timmy" },
    { fname: "Sasha" },
    { fname: "Zoey" },
    { fname: "Zip" },
    { fname: "Chimmy" },
    { fname: "Tote" },
    { fname: "Aria" },
    { fname: "Ned" },
    { fname: "Snow" },
    { fname: "Eisa" }
  ];


  const root = document.getElementById('content');
  ReactDOM.render(<Root names={names} />, root);
});