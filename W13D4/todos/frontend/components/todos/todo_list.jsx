import React from 'react';
import TodoListItem from './todo_list_item';
import TodoFormContainer from './todo_form_container';


class TodoList extends React.Component { 
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchTodos()
  }


  render() {
    const { todos, receiveTodo, removeTodo, createTodo, errors, clearErrors, deleteTodo, updateTodo } = this.props; 

    let allTodos = todos.map((todo) => {
      return(
        <TodoListItem 
          key={todo.id} // the key must be within a map function bc it is what React is looking at
          todo={todo}
          receiveTodo={receiveTodo}
          updateTodo={updateTodo}
          // removeTodo={removeTodo}
          deleteTodo={deleteTodo}
        />
      ) 
    })
      
    return (
      <div>
        <TodoFormContainer createTodo={createTodo} errors={errors} clearErrors={clearErrors} />
        <ul>
          {allTodos}
        </ul>
      </div>
    ); 
  }
};


export default TodoList; 









