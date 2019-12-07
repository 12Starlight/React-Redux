import React from 'react';


const FruitStand = (props) => (
  <ul>
    { props.fruits.map((fruit, idx) => <li key={idx} >{fruit}</li>) }
  </ul>
);


export default FruitStand; 






