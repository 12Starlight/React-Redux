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

  switch (action.type) {
    default:
        return oldState; 
  }
};


export default todosReducer; 
