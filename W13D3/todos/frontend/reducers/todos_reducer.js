import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, STATUS } from '../actions/todo_actions';


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

// const _nulTodo = Object.freeze({
//   id: null
// });


const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newTodoObj = {};
  let deletedTodo; 

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newTodoObj[todo.id] = todo; 
      });
      return newTodoObj; 
    case RECEIVE_TODO:
      return Object.assign({}, oldState, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      deletedTodo = Object.assign({}, oldState);
      delete deletedTodo[action.todoId];
      console.log(deletedTodo);
      console.log(action); 
      return deletedTodo; 
    // case STATUS:
    //   return Object.assign({}, oldState, { [action.done]: true })
    default:
      return oldState; 
  }
};


export default todosReducer; 






