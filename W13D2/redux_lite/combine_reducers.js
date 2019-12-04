// Example object
// const reducers = {
//   users: reducerForUsers,
//   roles: reducerForRoles,
//   banannas: reducerForBanannas,
//   entities: reducerForEntities
// }

// combineReducers
const myCombineReducers = (reducersObj) => {
  return (prevState = {}, action) => { // this represents the selected reducer
    let nextState = {};

    for (key in reducersObj) {
      nextState[key] = reducersObj[key](prevState[key], action);
    }

    return nextState;
  }
}

module.exports = myCombineReducers; 
