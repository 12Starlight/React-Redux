import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import { receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);


  // const addLoggingToDispatch = (store) => {
  //   let storeDispatch = store.dispatch; 

  //   return (action) => {
  //     console.log(store.getState()); 
  //     console.log(action);
  //     storeDispatch(action);
  //     console.log(store.getState());
  //   }
  // }
  // Phase 1
  // store.dispatch = addLoggingToDispatch(store);

  
  // const addLoggingToDispatchMiddleware = (store) => {

  //   return (next) => {
  //     return (action) => {

  //     }
  //   }
  // }
  // Refactored
  // const addLoggingToDispatchMiddleware = store => next => action => { // this is a middleware that we will use as an argument
  //   console.log(store.getState());
  //   console.log(action);
  //   debugger; 
  //   next(action);
  //   console.log(store.getState());
  // }  
   
  // const applyMiddleware = (store, ...middlewares) => { // rest parmeter
  //   let dispatch = store.dispatch; // redefining 

  //   middlewares.forEach((middleware) => { // iterating through the middlewares
  //     dispatch = middleware(store)(dispatch); // can someone explain this?
  //   });

  //   return Object.assign({}, store, { dispatch })
  // }
  // // Phase 2
  // store = applyMiddleware(store, addLoggingToDispatchMiddleware); 


  // Another Example
  // const middleOne = store => next => action => {
  //   console.log("HI");
  //   next(action);
  // };
  // const middleTwo = store => next => action => {
  //   console.log("THERE");
  //   next(action);
  // };
  // const middleThree = store => next => action => {
  //   console.log("FRIEND");
  //   next(action);
  // };
  // const applyMiddleware = (store, ...middlewares) => {
  //   let dispatch = store.dispatch;
    
  //   middlewares.forEach(middleware => {
  //     dispatch = middleware(store)(dispatch); // the result of running all the middlewares! 
  //   });
  //   return Object.assign({}, store, { dispatch });
  // };
  // store = applyMiddleware(store, middleThree, middleTwo, middleOne);

  /* 
    Notes:

    When we run applyMiddleware on line 79:

    inside middleThree , the value of next is the "real" store.dispatch
    inside middleTwo, the value of next is middleThree
    inside middleOne, the value of next is middleTwo
    last but not least, we overwrite dispatch to reference middleOne, instead
    
    That means that when we call dispatch(action) from our component, we'll actually 
    hit our first middleware! Inside each middleware, we invoke the next middleware 
    in the chain using next(action). We've also set it up so that next inside our 
    last middleware will send our action to the reducer!

    The inner function gets called and next(action) gets called each time being 
    the previous middleware. This is happening on line 75 where dispatch is 
    reassigned and then on the 'next' iteration dispatch wraps around 'next' and
    the previous evaluated middleware becomes `next` which then gets passed in the
    POJO action. However, that action does not get invoked until the very last 
    middleware is ran. 
    
    But, the middlewares are ran in opposite order using `compose`.
    So, the very first middleware's `next` gets assigned the orignal defined 
    `dispatch` on line 72. Finally, after all the middleware have been ran and the
    POJO action has been dispatched using `store.dispatch` to the reducer, line 77
    returns with the evaluated result of all the middleware being ran. 
  
  */


  // Adding to window
  window.store = store; 
  window.dispatch = store.dispatch;  
  window.receiveTodo = receiveTodo;
  // window.addLoggingToDispatch = addLoggingToDispatch; 
  // window.addLoggingToDispatchMiddleware = addLoggingToDispatchMiddleware;
  // window.applyMiddleware = applyMiddleware; 


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});



