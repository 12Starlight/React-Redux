// Import React Redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Import Local Directory Files
import rootReducer from '../reducers/root_reducer';


const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(logger)
);


export default configureStore; 





