// Example of store state shape
let storeState = {
  todos: {
    1: {
      id: 1,
      body: 'learn selectors',
      done: 'done'
    },
    2: {
      id: 2,
      body: 'look good doing it',
      done: 'undone'
    }
  },
  filter: 'undone'
}

// getAllTodos Selector 
// returns all the todos stored in the state as an array of todo objects, making
//  it easier to iterate over and render each one. 
// reducers/selectors.js
export const getAllTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
); 

// A selector can be used in multiple components' mapStateToProps
// components/containers/todo_list_container.jsx
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: getAllTodos(state)
});

// Selectors are passed the entire application `state so they can utilize 
// multiple slices of the application state to assemble data
// reducers/selectors.js
export const getFilteredTodos = ({ todos, filter }) => {
  let result = [];

  for (let id in todos) {
    if (todos[id].done === filter) {
      result.push(todos[id]);
    }
  }

  return result; 
}

// components/containers/todo_list_container.jsx
import { getAllTodos, getFilteredTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: getAllTodos(state),
  filteredTodos: getFilteredTodos(state)
});

// Other Selector Examples
// reducers/slectors.js

// returns the state's todos as an arrray of todos
export const getAllTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

// returns the state's todos as an array of todos,
// filtered by their done /undone status
export const getFilteredTodos = ({ todos, filter}) => {
  let result = [];

  for (let id in todos) {
    if (todos[id].done === filter) { result.push(todos[id]); }
  }

  return result;
};

// returns the selected todo object or an empty todo object
// if no todo exists with given id
export const selectTodos = ({ todos }, id) => {
  const nullTodo = {
    id: null,
    body: '',
    done: 'undone'
  };

  return todos[id] || nullTodo;
};

