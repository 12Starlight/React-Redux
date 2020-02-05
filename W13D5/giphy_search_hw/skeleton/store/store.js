import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';


// Build Store
const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
};


export default configureStore; 





