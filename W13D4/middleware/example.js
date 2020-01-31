 // Logger Example of Middleware
 // store/store.js
 import { createStore, applyMiddleware } from 'redux';
 import rootReducer from 'reducers';
 import logger from 'redux-logger';


 let configureStore = (preloadedState = {}) => (
   createStore(
     rootReducer,
     preloadedState,
     applyMiddleware(logger) // can take multiple arguments
   )
 );


export default configureStore; 


/*
  So, the outtermost function gets invoked first, and our store gets passed as an 
  argument so we close over that, and have access to it in each middleware incase 
  we want to use it (example would be logger, to show information in the console).  
  As we are going down the chain of middleware, the next middleware in the chain 
  of applyMiddleware becomes the next argument of the following middleware.  
  Finally, when we get to the end of the chain, next will be the dispatch function 
  so that we can finally dispatch the action and hit our reducers!

  So, the whole whole point of the first function is to enclose over the store 
  state argument passed in order to get access to it via middleware and then, 
  once we have gone through all our middleware our last next argument is dispatch 
  which gets passed the action.
*/


// Function Signature
const middleware = store => next => action => {
  // side effects, if any
  return next(action);
};

// Example of side effects happening after next(action)
const middleWare = store => next => action => {
  const result = next(action);
  // side effect using `result`
  return result; 
};


// Logger Example
const logger = store => next => action => {
  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
};


// Applying logger to applyMiddleware
// store/store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


let configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);


export default configureStore; 

