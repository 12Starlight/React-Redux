// How to create a store
import { createStore } from 'redux';
import reducer from './reducer';
import { addOrange } from './actions';

const store = createStore(reducer);

// Example of action
const addOrange = {
  type: 'ADD_FRUIT',
  fruit: 'orange'
};

// Example of a reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.fruit];
    default:
      return state;
  }
}; 

export default reducer; 

// Example of dispatch
store.getState(); // => []
store.dispatch(addOrange); 
store.getState(); // => ['orange']


// Example of a callback to subscribe to our store
const display = () => {
  console.log(store.getState());
};

const unsubscribeDisplay = store.subscribe(display);
store.dispatch(addOrange); // ['orange', 'orange']

// ... later (when we are done displaying)
unsubscribeDisplay(); // display will no longer be invoked after store.dispatch()


// React Fruit Stand
// Passes in the application's store as a prop 
// Subscribes to forceUpdate() callback function
import React from 'react';

class FruitStand extends React.Component {
  constructor(props) {
    super(props);

    /* Note: Subscribing `forceUpdate()` is not a recommended pattern and is used
        for illustration purposes only. See the `NB` below. */
    this.forceUpdate = this.forceUpdate.bind(this);
    this.unsubscribe = this.props.store.store.subscribe(this.forceUpdate);
  }

  render() {
    return (
      <ul>
        {
          this.props.store.getState().map((fruit, idx) => (
            <li key={idx} >{ fruit }</li>
          ))
        }
      </ul>
    ); 
  }

  // let us make sure that when we are done with our component
  // we unsubscribe any callbacks we registered to the store
  componentWillUnmount() {
    this.unsubscribe();
  }
}


export default FruitStand; 