
const _defaultState = {
  fruits: []
}


const reducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case 'ADD_FRUIT':
      return { fruits: [...oldState.fruits, action.fruit] };
    case 'CLEAR':
      return _defaultState;
    default:
      return oldState; 
  }
}


export default reducer; 



