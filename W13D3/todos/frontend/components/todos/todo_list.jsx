import React from 'react';
import TodoListItem from './todo_list_item';


export default ({ todos }) => {
  let allTodos = todos.map((todo) => {
    return(
      <TodoListItem 
        key={todo.id} // the key must be within a map function bc it is what React is looking at
        todo={todo}
      />
    ) 
  })
  
 return(
   <ul>
     {allTodos}
   </ul>
 ) 
};

