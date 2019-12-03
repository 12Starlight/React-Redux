// example of what our global state might look like
let state = {
  user: 'Andy',
  role: 'Instructor'
};


/*

An action that modifies the role might look like:
  // actions are objects that have a type representing the type of change
  // they will make, and any other data needed to make the change
*/

const action = {
  type: 'change role',
  newRole: 'Student'
};


/*

A `roleReducer` might look like:
  // the reducer always takes the old value and the action
  // and is responsible for returning either new value or the
  // old value, depending on if it 'responds' to that action type
*/

const roleReducer = (oldRole = null, action) => {
  if (action.type === 'change role') {
    return action.newRole;
  } else {
    return oldRole; 
  }
}