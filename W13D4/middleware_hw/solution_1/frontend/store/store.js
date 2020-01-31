import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


// Logger Middleware 
const addLoggingToDispatch = store => dispatch => {

  return action => {
    console.log(store.getState());
    console.log(action);
    dispatch(action);
    console.log(store.getState());
  };
};

// Other Middleware
const cookieDoe = store => next => action => {
  console.log("Hi, I love cookie doe and vanilla bean icecream ;)");
  next(action);
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer, 
    preloadedState,
    
    // Phase 3: Redux 'applyMiddleware'
    applyMiddleware(
      addLoggingToDispatch,
      cookieDoe
    )
  );
  
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;






