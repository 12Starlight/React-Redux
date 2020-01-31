import { combineReducers } from 'redux';
import todosReducer from "./todos_reducer";
import stepReducer from './step_reducer';
import errorsReducer from './error_reducer';


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepReducer,
  errors: errorsReducer 
});


export default rootReducer; 




