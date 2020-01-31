// Old Way
const TodoActions = {
  receiveTodo(todo) {
    return {
      type: 'RECEIVE_TODO',
      todo 
    };
  },
  fetchTodos() {
    return { type: 'FETCH_TODOS' }
  },
  createTodo(todo) {
    return {
      type: 'CREATE_TODO',
      todo
    };
  }
};

module.exports = TodoActions;


// ES6 Way ;) 
const receiveTodo = todo => ({
  type: 'RECEIVE_TODO',
  todo 
});

// Note nothing got passed in, so we do not need to set it as a key in our obj
const fetchTodos = () => ({
  type: 'FETCH_TODOS',
});

const createTodo = (todo) => ({
  type: 'CREATE_TODO',
  todo
});

export { receiveTodo, fetchTodos, createTodo };


// We can also export each function (preferred)
export const receiveTodo = todo => ({
  type: 'RECEIVE_TODO',
  todo
});

export const fetchTodos = () => ({
  type: 'FETCH_TODOS',
});

export const createTodo = todo => ({
  type: 'CREATE_TODO',
  todo
});


// Single objects use export default (functions and classes are objects)
class TodoList {
  // class definition
}

export default TodoList;

// function
export default () => {
  // function body
};


// Importing using ES6
import TodoList from './todo_list';
import App from './app';

// Importing several obj/actions at a time
// Notice this is obj destructuring ;) 
///  We are just extracting the data that has been exported from the other file,
///  and then assigning it to a distinct variable to user in our current file
import { createTodo, receiveTodo } from './todo_actions';

// We can give default, unnamed exports any name we want
import * as TodoActions from './todo_actions';
// TodoActions now acts as a wrapper object for all the methods
// defined in 'todo_actions.js'

// let todo = ...; 
TodoActions.createTodo(todo); 

// Note we must alias our imported object using the `as` keyword to be able to 
// refer to it later. Aliasing can be used to namespace all the exported 
// functions, constants, etc. from a file to wrap them into a single, easily
// referenced object 