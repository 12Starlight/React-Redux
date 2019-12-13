import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shaampoo',
    done: true
  }
};


const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newTodoObj = {};

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newTodoObj[todo.id] = todo; 
      });
      return newTodoObj; 
    case RECEIVE_TODO:
      return Object.assign({}, oldState, { [action.todo.id]: action.todo })
    default:
      return oldState; 
  }
};


export default todosReducer; 






