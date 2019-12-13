import React from 'react';
import { allTodos } from '../../reducers/selectors';


export default ({ todos }) => {
  let allTodos = todos.map((todo, idx) => {
    return <li key={idx}>{todo.title}</li>
  })
  
 return(
   <ul>
     {allTodos}
   </ul>
 ) 
};

