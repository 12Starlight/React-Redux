const thunk = ({ dispatch, getState }) => next => action => { // store.dispatch and store.getState deconstructed
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action);
};


export default thunk; 



