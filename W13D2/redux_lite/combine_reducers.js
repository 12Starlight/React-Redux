// Example object
// const reducers = {
//   users: reducerForUsers,
//   roles: reducerForRoles,
//   banannas: reducerForBanannas,
//   entities: reducerForEntities
// }

// combineReducers
const myCombineReducers = (reducersObj) => {
  return (prevState, action, subscriptions) => { // this represents the selected reducer
    let nextState = {};
    let changed = false; // create a logic varibale 

    for (key in reducersObj) {
      nextState[key] = reducersObj[key](prevState[key], action);
      
      if (nextState[key] !== prevState[key]) {
        changed = true; // state changed for that reducer, so change logic variable to true
      }
    }

    if (changed === true && subscriptions.length > 0) {
      subscriptions.forEach((subscript) => {
        subscript(nextState); 
      });
    }

    return nextState;
  }
}

module.exports = myCombineReducers; 
