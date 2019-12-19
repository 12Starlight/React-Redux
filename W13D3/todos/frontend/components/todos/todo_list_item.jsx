import React from 'react'; 


class TodoListItem extends React.Component { 
  constructor(props) {
    super(props);

    this.statusChange = this.statusChange.bind(this);
  }

  statusChange(e) {
    this.props.todo.done = !this.props.todo.done
    this.props.receiveTodo(this.props.todo)
  }


  render() {
    const { todo, receiveTodo, removeTodo, statusTodo } = this.props; 


    return (
      <div>
        <li >{todo.title} => completed: {todo.done.toString()}</li>
        <button onClick={ () => removeTodo(todo.id) }>Delete</button>
        <button onClick={ (e) => this.statusChange(e) }>Done</button>
      </div>

    )
  }
};


export default TodoListItem; 