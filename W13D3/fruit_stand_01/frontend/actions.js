export const addOrange = {
  type: 'ADD_FRUIT',
  fruit: 'orange'
};

// same action type different payload
export const addApple = {
  type: 'ADD_FRUIT',
  fruit: 'apple'
};

// different action
export const removeFruit = {
  type: 'REMOVE_FRUIT'
};
