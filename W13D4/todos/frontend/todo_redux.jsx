import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos, stepsByTodoId } from './reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
// import { fetchTodos } from './util/todo_api_util';
import { fetchTodos } from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); 

  // code to test on the window
  window.store = store; 
  window.receiveTodos = receiveTodos; 
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep; 
  window.stepsByTodoId = stepsByTodoId; 
  window.fetchTodos = fetchTodos; 


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
}); 

 


