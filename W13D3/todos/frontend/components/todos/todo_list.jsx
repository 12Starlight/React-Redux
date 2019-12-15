import React from 'react';
import TodoListItem from './todo_list_item';


export default ({ todos }) => {
  let allTodos = todos.map((todo) => {
    return(
      <TodoListItem 
        key={todo.id}
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

