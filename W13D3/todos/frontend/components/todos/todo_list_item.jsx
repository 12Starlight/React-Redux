import React from 'react'; 
import TodoDetailViewContainer from './todo_detail_view_container';


class TodoListItem extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    }
    this.statusChange = this.statusChange.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  statusChange(e) {
    this.props.todo.done = !this.props.todo.done
    this.props.receiveTodo(this.props.todo)
  }

  changeDetail() {
    this.setState({
      detail: !this.state.detail
    })
  }


  render() {
    const { todo, receiveTodo, removeTodo, statusTodo } = this.props; 


    return (
      <div>
        <li onClick={ this.changeDetail } >{todo.title} => completed: {todo.done.toString()}</li>
        <TodoDetailViewContainer 
          detail={this.state.detail} 
          todo={todo}
        />
        <button onClick={ (e) => this.statusChange(e) }>Done</button>
      </div>

    ) 
  }
};


export default TodoListItem; 


// <button onClick={() => removeTodo(todo.id)}>Delete</button>