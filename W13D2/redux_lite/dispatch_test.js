const Store = require('./store.jsx');
const myCombineReducers = require('./combine_reducers');


// Dispatch example 
const userReducer = (oldUser = null, action) => {
  if (action.type === 'new user') {
    return action.user;
  }

  return oldUser;
};

// create a rootReducer:
const rootReducer = myCombineReducers({
  user: userReducer
});

// create a store using the rootReducer
const store = new Store(rootReducer);

// get the state
console.log(store.getState()); // => {}

// invoke the dispatch function to update the user key:
const action = {
  type: 'new user',
  user: 'Jeffrey Fiddler'
};

// store.dispatch(action); 
// console.log(store.getState()); // => { user: 'Jeffrey Fiddler' } 


// Created new store and tested getState() to get the default state
const newStore = new Store(rootReducer);

newStore.dispatch(action);
console.log(newStore.getState()); 