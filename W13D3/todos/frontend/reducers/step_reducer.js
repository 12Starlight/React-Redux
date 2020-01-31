import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';


// const initialState = {
//   1: { // this is the step with id = 1
//     id: 1,
//     title: 'walk to the store',
//     done: false,
//     todo_id: 1
//   },
//   2: { // this is the step with id = 2
//     id: 2,
//     title: 'buy soap',
//     done: false,
//     todo_id: 1
//   }
// }

const stepReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newStepObj = {};
  let deletedStep;

  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newStepObj[step.id] = step;
      });
      return newStepObj;
    case RECEIVE_STEP:
      return Object.assign({}, oldState, { [action.step.id]: action.step });
      // return { ...oldState, ...{ [action.step.id]: action.step } };
    case REMOVE_STEP:
      // debugger; 
      deletedStep = Object.assign({}, oldState);
      delete deletedStep[action.stepId];
      // console.log(deletedStep);
      // console.log(action.stepId);
      return deletedStep;
    default:
      return oldState; 
  }
}


export default stepReducer;  