// Thunk Example with Dispatch
const thunkActionCreator = () => dispatch => {
  dispatch({
    type: 'RECEIVE_MESSAGE',
    message: 'This will be dispatched immediately'
  });

  setTimeout(() => dispatch({ // notice it is running two functons and this is the second
    type: 'RECEIVE_MESSAGE',
    message: 'This will be dispatched 1 second later.'
  }, 1000));
}; 


// Thunk Example intercepting actions as type 'function', then triggering dispatch
// middleware/thunk_middleware.js
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};


export default thunk; 


// Example of AJAX request
// utils/contacts_api_util.js
export const fetchContacts = () => $.ajax({ url: 'api/contacts' });

// Action Creator Example
import * as ContactAPIUtil from '../utils/contacts_api_util';

// action creator which returns an object
export const receiveContacts = contacts => ({
  type: RECEVE_CONTACTS,
  contacts 
});

// async action creator which returns a function 
export const fetchContacts = () => dispatch => (
  ContactAPIUtil.fetchContacts().then(contacts => dispatch(receiveContacts(contacts))) // remember 'contacts' is the response
);