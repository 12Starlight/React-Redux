import * as TodoApiUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


// Regular Action Creator
export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos 
});

export const receiveTodo = (todo) => {
  // debugger 
  return({
    type: RECEIVE_TODO,
    todo
  })
};

export const removeTodo = (id) => {
  // debugger 
  return({
    type: REMOVE_TODO,
    todoId: id 
  })
};


// Thunk Action Creator
export const fetchTodos = () => (dispatch) => (
  TodoApiUtil.fetchTodos().then(todos => {
    dispatch(receiveTodos(todos))
    return todos 
  })
);

export const createTodo = (todo) => (dispatch) => (
  TodoApiUtil.createTodo(todo).then(
    todoPromise => dispatch(receiveTodo(todoPromise)),
    error => dispatch(receiveErrors(error.responseJSON))  
  )
); 

export const updateTodo = (todo) => (dispatch) => (
  TodoApiUtil.updateTodo(todo).then(
    todoPromise => dispatch(receiveTodo(todoPromise)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const deleteTodo = (id) => (dispatch) => (
  TodoApiUtil.deleteTodo(id).then(
    todoPromise => dispatch(removeTodo(todoPromise.id)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);



