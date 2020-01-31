// Example of of how we can not debug arrow functions with implicit returns
// Action Creator With Implicit Return
const addFruit = fruit => ({
  type: 'ADD_FRUIT',
  fruit
});

/*
// Can not do this

const addFruit1 = fruit => ({
  debugger
  type: 'ADD_FRUIT',
  fruit
});
 
// Also, can NOT do this

const addFruit2 = fruit => (
  debugger 
  {
    type: 'ADD_FRUIT',
    fruit
  }
);

*/


// Converting arrow functions with implict to arrow functions with explict return statements
const addFruit3 = fruit => {
  return {
    type: 'ADD_FRUIT',
    fruit 
  };
};

// Too
const addFruit4 = fruit => {
  debugger;

  return {
    type: 'ADD_FRUIT',
    fruit 
  };
};