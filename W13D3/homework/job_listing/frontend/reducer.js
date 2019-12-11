import { SWITCH_LOCATION } from './actions';


const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
  case SWITCH_LOCATION: 
    return Object.assign({}, { city: action.city, jobs: action.jobs }); 
  default:  
    return oldState; // remove this and fill out the body of the reducer function
  }
};

export default reducer;




