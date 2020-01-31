import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';


// mapStateToProps

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    removeStep: (id) => dispatch(removeStep(id)),
    receiveStep: (step) => dispatch(receiveStep(step))
  }
};


export default connect(null, mapDispatchToProps)(StepListItem);