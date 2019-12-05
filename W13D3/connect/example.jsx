// Example using connect
const createConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

// Example how it renders and passes props to presentational component
const ConnectedComponent = createConnectedComponent(MyComponent); 

// Example of mapStateToProps
// ConnectedComponent renders MyComponent, passing in name as a prop 
const MyComponent = ({ name }) => {
  <div>{ name }</div>
};

const mapStateToProps = state => ({
  name: state.name; 
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

// Example of ownProps
const msp = (state, ownProps) => ({
  firstName: state.name,
  intials: `${state.name[0]}. ${ownProps.lastName[0]}.`
});

ConnectedComponent = connect(msp)(MyComponent);


// Example of mapDispatchToProps
const deleteTodo = id => ({ type: 'DELETE_TODO', id }); // action creators
const addTodo = msg => ({ type: 'ADD_TODO', msg });

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(deleteTodo(id)),
  handleAdd: msg => dispatch(addTodo(msg))
});

// Putting it all together
const MyPresComponent = ({ firstName, intials, handleAdd, handleDelete }) => {
  return <div>...</div>
};

const mapstp = (state, ownProps) => ({
  firstName: state.name,
  initials: `${state.name[0]}. ${ownProps.lastName[0]}.`
});

const mapdtp = (dispatch) => ({
  handleDelete: id => dispatch(deleteTodo(id)),
  handleAdd: msg => dispatch(addTodo(msg))
});

export default connect(mapstp, mapdtp)(MyPresComponent); 


/*
Breakdown:

function connect(mapStateToProps, mapDispatchToProps) {
  // returns a function that takes your component as an argument
  return function(YourAwesomeComponent) {
    // leaving out some details, but basically we have access to the store
    // via the context set up by the Provider

    // your mapStateToProps function gets called with the store's state
    const stateProps = mapStateToProps(store.getState());
    // your mapDispatchToProps function gets called with the store's dispatch 
    // function
    const dispatchProps = mapDispatchToProps(store.dispatch);

    // returns a React component that renders your component with all the props
    return function Connect(moreProps) {
      const props = Object.assign(stateProps, dispatchProps, moreProps);

      return <YourAwesomeComponent {...props} />
    };
  };
}

*/