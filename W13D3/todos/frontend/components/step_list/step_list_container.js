import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {

  return {
    steps: stepsByTodoId(state, ownProps.todo.id), // needed to pass in arguments
    todoId: ownProps.todo.id 
  }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    receiveStep: (step) => dispatch(receiveStep(step))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepList);