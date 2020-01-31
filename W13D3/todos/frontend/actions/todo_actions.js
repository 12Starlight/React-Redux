export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const STATUS = 'STATUS';


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

// export const statusTodo = (id) => {
//   return({
//     type: STATUS,
//     todoId: id 
//   })
// };