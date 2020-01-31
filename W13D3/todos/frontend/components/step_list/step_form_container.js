import { connect } from 'react-redux';
import StepForm from './step_form';
import { receiveStep } from '../../actions/step_actions';


// mapStateToProps 
const mapStateToProps = (state, ownProps) => ({
  todoId: ownProps.todoId
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});


export default connect(mapStateToProps, mapDispatchToProps)(StepForm);