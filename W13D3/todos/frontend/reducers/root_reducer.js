import { combineReducers } from 'redux';
import todosReducer from "./todos_reducer";
import stepReducer from './step_reducer';


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepReducer 
});


export default rootReducer; 