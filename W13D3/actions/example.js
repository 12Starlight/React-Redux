// Regular action
// actions/fruit_actions.js
const addOrange = {
  type: 'ADD_FRUIT',
  fruit: 'orange'
};

store.dispatch(addOrange);
store.getState(); // => ['orange']

// Example of action creator
// actions/fruit_actions.js
const addFruit = fruit => ({
  type: 'ADD_FRUIT',
  fruit
});

store.dispatch(addFruit('Apple'));
store.dispatch(addFruit('Strawberry'));
store.dispatch(addFruit('Lychee'));
store.getState(); // => ['orange', 'apple', 'strawberry', 'lychee']

// Example of using constants inside action creators
export const ADD_FRUIT = 'ADD_FRUIT';
export const ADD_FRUITS = 'ADD_FRUITS';
export const SELL_FRUIT = 'SELL_FRUIT';

export const addFruit = fruit => ({
  type: ADD_FRUIT,
  fruit
});

export const addFruits = fruits => ({
  type: ADD_FRUITS,
  fruits
});

export const sellFruit = fruit => ({
  type: SELL_FRUIT,
  fruit
});