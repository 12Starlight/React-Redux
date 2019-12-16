import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore; 

  // code to test on the window
  window.store = store; 
  window.receiveTodos = receiveTodos; 
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
}); 