const thunk = store => next => action => {
  debugger;
  if (typeof action === "function") {
    return action(store.dispatch); // we want to return the result of the AJAX bc that will be the promise that we will use to update the store via state
  } else {
    return next(action);
  }
};

// (dispatch) => { // the action is going to be this whole function. So, when call the action we can just feed the store through by passing 'store.dispatch' into the action
//   ApiUtil.fetchBleats().then(bleats => {
//     dispatch(receiveBleats(bleats)) 
//   });
// };

// store.dispatch({ // Modifying the data after it has been received
//   type: "ADD_BLEAT",
//   bleat: {}
// });

// const promise = store.dispatch(() => { // Getting data
//   return $.ajax({
//     url: '/api/bleats',
//     method: 'GET'
//   })
// });

// promise.then()



export default thunk;