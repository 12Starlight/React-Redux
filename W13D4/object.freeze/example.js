// Farmer Stand Example
const farmersReducer = (state = {}, action) => {
  Object.freeze(state); // freezes the state

  switch (action.type) {
    case 'HIRE_FARMER':
      let nextState1 = Object.assign({}, state);
      const farmer1 = {
        id: action.id,
        name: action.name,
        paid: false
      };
      nextState[action.id] = farmer;
      return nextState;
    case 'PAY_FARMER':
      let nextState2 = Object.assign({}, state);
      let farmer2 = nextState2[action.id];
      farmer2.paid = !farmer2.paid;
      return nextState2;
    default:
      return state;
  }
};


export default farmersReducer; 


// Example of state not mutationg
const people = { farmers: { name: 'Old MacDonald' }};
Object.freeze(people);

people.farmers = { name: 'Young MacDonald' };
console.log(people); //=> { farmers: { name: 'Old MacDonald' }}

// Example of it not being a deep freeze
people.farmers.name = 'Young MacDonald';
console.log(people); //=> { farmers: { name: 'Young MacDonald' }}