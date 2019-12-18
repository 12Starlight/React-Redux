import React from 'react';
import TodoListContainer from '../components/todos/todo_list_container';
import TodoFormContainer from '../components/todos/todo_form_container';


const App = () => {
  return(
    <div>
      <TodoFormContainer />
      <TodoListContainer />    
    </div>
  ) 
}


export default App;