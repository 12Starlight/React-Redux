# Store Questions

## **Store**

What does the store do?
> Answer: The store does the following:
  * The store updates state using reducers
  * It listens for a change in state via actions which are plain javascript objects
  * It holds the global state
  * Gives components the ability to listen for changes in state

&nbsp;

## **createStore()**

What arguments do they take?
> Answer: reducer(required), `[preloadedState]`(optional), `[enhancer]`(optional)

&nbsp;

What does each argument do?
> Answer: Each argument does the following:
  * <kbd>reducer</kbd> - function that takes in the curent state and actions, then determines how to update that state of the store, and then returns the new state. 
  * <kbd>preloadedState</kbd> - this is an `object` that represents the previous state before the store's creation.
  * <kbd>enhancer</kbd> - a callback function that gives more capabilities to the store. 

&nbsp;

## **Store Functions**

What does getState() do?
> Answer: `getState()` returns the store's most updated state.

&nbsp;

What does dispatch(action) do?
> Answer: `dispatch(action)` paasses an `action` into the store's reducer, indicating what data needs to be updated for that slice of state the reducer represents.

&nbsp;

What does subscribe(callback) do?
> Answer: `subscribe(callback)` pushes callback functions into an array that get invoked each time the state updates. It also, returns an additional function that when invoked, unsubscribes the callback function from the store. 