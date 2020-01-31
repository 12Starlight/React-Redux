import { connect } from 'react-redux';
import { addApple, addOrange, clearFruit } from '../actions';
import FruitStand from './fruit_stand';


// mapStateToProps 
// passes in state and ownProps
const mapStateToProps = (state) => ({
  fruits: state.fruits 
});

// mapDispatchToProps
// paasses in dispatch and ownProps
// dipatch is passed in the invoked action creator as an argument 
const mapDispatchToProps = dispatch => ({
  addApple: () => dispatch(addApple()),
  addOrange: () => dispatch(addOrange()),
  clearFruit: () => dispatch(clearFruit())
});


// connect is a currying function that returns another function
// this is why we can attach (FruitStand) at the end, invoking it 
export default connect(mapStateToProps, mapDispatchToProps)(FruitStand);








