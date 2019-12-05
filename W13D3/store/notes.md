# Store

### **Summary**

The central focal point of Redux's architecture. This is where the global **state** of an application is held. This is done by:
  * updating the entire applciation state using its **reducer**
  * broadcasting the state to an application's view layer using **subscription**
  * listening for **actions** the execute a change to the global state of the application

&nbsp;

### **Creating a Store**

To create a store, utilize the `redux` library's `createStore()` method, that takes three arguments <kbd>reducer</kbd>, <kbd>[preloadedState]</kbd>, <kbd>[enhancer]</kbd> and returns a Redux `store`. 
  * `reducer` this is the only required argument - A function that receives the most updated state and incoming actions, determines how store state is updated, and returns the new state. 
  * `preLoadedState` (not required) - It represents any application state before the store was created, as an `object`. 
  * `enhancer` (not required) - This is a function that gives extra capabilites to the store. 

&nbsp;

### **Store API**

The `store` being only an object, has a tiny Redux API.

#### **Store Methods**
  * `getState()` - Returns the current state.
  * `dispatch(action)` - Passes an `action` into the store's `reducer` telling it how to update the slice of state for that reducer. 
  * `subscribe(callback)` - Pushes callback functions into an array, that get invoked each time the store updates. It also, returns a function which unsubscribes that callback function from the store, when it is invoked. 

&nbsp;

### **Updating the Store**

**Actions** are the only way the store can be updated and are just plain object with a `type` key that indicates the action being performed. Sometimes optional payload keys are needed that contain new information. 
      
      store.dispatch(action);

&nbsp; 

Each time `store.dispatch()` is called, the store passes its most updated `state`, forward with the `action` being dispatched, to the `reducer`. The `reducer` bare function takes two arguments(`state` and `action`), then returns the next new `state`. 
  * The reducer's `state` parameter provides a default value; this is the **initial state** of the store prior to any actions. It can be set to an object, array, or anything really. 
  * In Redux, <kbd>**the state is immutable**</kbd>, so the reducer must return a **new array or object** when the state updates.  

&nbsp;

### **Subscribing to the Store**

After `dispatch()` has been processed by the store, all of the subscribers get triggered which are callbacks that get added to the store via `subscribe()`. As you can see in this example, the store processed the dispatch action and then **after** called all of the subscribers. In this case, our only subscriber is the `display` callback which logs the current state when called.   

![alt text](./Screen&#32;Shot&#32;2019-12-04&#32;at&#32;6.17.48&#32;PM.jpg "Example of callback function for a subscription")

&nbsp;

#### **React Components**

In order to connect React view layer to the store, we need to use `store.subscribe()`. By subscribing a React component to the store using `forceUpdate()`, the store triggers re-rendering of the component each time `store.dispatch(action)` gets called and the state changes. This is not the most effective way to re-render, due to the children of the parent also geting re-rendered. The `react-redux` library `Provider /connect()` API solves this. 