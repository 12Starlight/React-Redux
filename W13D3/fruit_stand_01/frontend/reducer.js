const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FRUIT':
      // console.log([...state, action.fruit]); 
      return [...state, action.fruit];
    // case 'REMOVE_FRUIT':
    //   let removed = [...state, state.slice(state.length)]
    //   console.log(removed);
    //   return removed; 
    default:
      return state;
  }
};

export default reducer;
