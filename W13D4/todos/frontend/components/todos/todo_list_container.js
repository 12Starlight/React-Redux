import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos, createTodo, deleteTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';


// mapStateToProps
const mapStateToProps = (state) => {
  // debugger
  
  return {
    todos: allTodos(state),
    errors: state.errors 
  }
};


// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  // removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 






