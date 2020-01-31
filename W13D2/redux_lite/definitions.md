# Definitions

#### **API (Application Programming Interface):**

**A** set of funcitons and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

&nbsp;

#### **Reducers**

**A**re pure functions that describe how these pieces of data will change in response to `actions`. 

&nbsp;

#### **Actions**

**A**re plain old javascript objects that represent a change that should be made to the state object. 

&nbsp;
&nbsp;

# Concepts

### State

Our global `state` object will store keys representing application data. For instance, if our state object has keys of `user` and `role`, we could create reducers that are named `usersReducer` and `roleReducer`. These would be responsible for returning the new value of `user` and `role` after each action. 

&nbsp;

### Reducers

The `type` of the incoming `action` and then change the state based on that `action`. It is up to the user of Redux to define their own reducers and actions, but the following assuptions are true:
  * reducers will be pure functions. They will not modify their arguments and will be deterministic (same output from same input)
  * reducers will always take two arguments: the previous value of the key in state(`prevState`) and `action`
  * reducers will have a default value for their `prevState`
  * if a reducer 'ignores' an `action`, it will return the unmodified `prevState`
  * if a reducer 'responds' to an `action`, it will either return something completely new (data from an action) or will create a **new copy** of the `prevState` before making any changes

Remember to use Object.assign or import { merge } from 'lodash' and do a deep copy of the store's state. When assigning a key wrap the entire assignment in an object like so:
      
      if (action.type === 'working professional') {
        return Object.assign(oldState, { role: action.newRole });

&nbsp;

### Combining Reducers

Calling every reducer manually would be tedious. Instead, we can have them define an object that has `keys` that point to a `reducer` which represents that part of the `state`.

&nbsp;

### Subscription

This is an array of functions that get added each time we call `store.subscribe`. Once that function is added to the subscriptions array, it gets invoked in the inner function of combineReducer. This happens only, if the state has changed for that reducer. Each function takes in next state as an argument. One example of how this might be helpful is by creating a logger function that console.logs each change in the state as it happens. 