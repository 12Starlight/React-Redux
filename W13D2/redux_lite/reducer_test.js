const myCombineReducers = require('./combine_reducers');


const myNoiseReducer = (prevState = 'peace and quie', action) => {
  switch(action.type) {
    case 'noisy action':
      return action.noise;
    default:
      return prevState; 
  }
};

const myNoisyAction = {
  type: 'noisy action',
  noise: 'car alarm'
};

const myInconsequentialAction = {
  type: 'a type no one cares about',
  data: {
    thisThing: 'will not get used anyway'
  }
};

const myInitialState = {
  noise: 'peace and quiet'
};

const myRootReducer = myCombineReducers({
  noise: myNoiseReducer,
});

let newState = myRootReducer(myInitialState, myInconsequentialAction);
console.log(newState); // => { noise: 'peace and quiet' }

newState = myRootReducer(newState, myNoisyAction);
console.log(newState); // => { noise: 'Car alarm' }

console.log(myRootReducer(newState, myInconsequentialAction));

/*
  The first time you call 'myRootReducer' with 'myInconsequentialAction', it returns
  the initial state. This is because the only reducer, 'myNoiseReducer', does not
  respond to that action type. When we invoke it with 'newState' and 'myNoisyAction',
  however, the 'noise' key is modified because 'myNoiseReducer' returns something 
  other than its 'prevState' for the "noisy action" action type. When we invoke the
  'rootReducer', with 'myInconsequetialAction' the second time, the 'noise' property
  does not revert back to it's default value, it does not change. 
*/

