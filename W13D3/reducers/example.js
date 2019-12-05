// fruit reducer
// const fruitReducer = (state = [], action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case 'ADD_FRUIT':
//       return [...state, action.fruit];
//     default:
//       return state;
//   }
// };

// export default fruitReducer; 

// Updating fruit reducer to take more actions 
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.fruit];
    case 'ADD_FRUITS':
      return [...state, ...action.fruits];
    case 'SELL_FRUIT':
      const idx = state.indexOf(action.fruit);

      if (idx !== -1) {
        // remove first instance of action.fruit
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      }
      return state; // if action.fruit is not in state, return previous state
    case 'SELL_OUT':
      return [];
    default:
      return state;
  }
}; 

// bad reducer
const badReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      state.count++;
      return state;
    default:
      return state;
  }
};

// good reducer
const goodReducer = (state = { count: 0 }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      let nextState = Object.assign({}, state);
      nextState.count++;
      return nextState;
    default:
      return state;
  }
};

/* 
  Splitting the fruit stand app's reducer into two reducers:
    // fruits - A reducing function that handles actions updating the fruits 
       slice of our app state.
    // farmers - A reducing function that handles actions updating the new 
       farmers slice of state.
*/  
// reducers/fruit_reducer.js
const fruitsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.fruit];
    case 'ADD_FRUITS':
      return [...state, ...action.fruits];
    case 'SELL_FRUIT':
      const idx = state.indexOf(action.fruit);
      if (idx !== -1) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      }
      return state;
    case 'SELL_OUT':
      return [];
    default:
      return state;
  }
};

export default fruitsReducer;

// reducers/farmers_reducer.js
const farmersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'HIRE_FARMER':
      let nextState = Object.assign({}, state); // deeply dup previous state 
      const farmer = {
        // creatae new farmer object
        id: action.id,
        name: action.name,
        paid: false
      };
      nextState[action.id] = farmer; // add new farmer to state
      return nextState;
    case 'PAY_FARMER':
      let nextState = Object.assign({}, state);
      let farmer = nextState[action.id];
      farmer.paid = !farmer.paid; // reverses boolean 
      return nextState;
    default:
      return state;
  }
};

export default farmersReducer; 

// Example of modifying our combineReducers()
import { combineReducers } from 'redux';
import fruitsReducer from './fruits_reducer';
import farmersReducer from './farmers_reducer';

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  farmers: farmersReducer
});

export default rootReducer;

// store/store.js
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer.js';

const store = createStore(rootReducer);

// initial state
store.getState(); // { fruits: [], farmers: {} }


// famersReducer that delegates to a single farmer reducer
// reducers/farmers_reducer 
// notice both reducers are in the same file
const farmersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'HIRE_FARMER':
      let nextState = Object.assign({}, state);
      nextState[action.id] = farmerReducer(undefined, action);
      return nextState;
    case 'PAY_FARMER':
      let nextState = Object.assign({}, state);
      nextState[action.id] = farmersReducer(nextState[action.id], action);
      return nextState;
    default:
      return state;
  }
};

// farmerReducer which is a single farmer reducer
const farmerReducer = (state, action) => {
  // state is a farmer object
  Object.freeze(state);

  switch (action.type) {
    case 'HIRE_FARMER':
      return {
        id: action.id,
        name: action.name,
        paid: false
      };
    case 'PAY_FARMER':
      return Object.assign({}, state, {
        paid: !state.paid // reverses boolean
      });
    default:
      return state;
  }
};

export default farmersReducer