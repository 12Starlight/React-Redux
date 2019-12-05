# **connect()**

## **React-Redux**: `connect()`

The `react-redux` package allows us to access the store `context` set by the [Provider](https://react-redux.js.org/api/provider "Provider Link") using `connect()`. This allows us to pass slices of the store's state and specific action-dispatches to a React component as `props`. This then, (the component's props) serve as its API to the store, making the component more dynamic and less burdened by Redux boilerplate. 

&nbsp;

### **Signature**

Being a *higher-order function* `connect()` takes two arguments, and returns a function:

      const createConnectedComponent = connect(
        mapStateToProps,
        mapDispatchToProps
      );

`createConnectedComponent` then takes your React component and returns a new React component:

      const ConnectedComponent = createConnectedComponent(MyComponent);

As `ConnectedComponent` renders `MyComponent`, props get passed too which are determined by the `mapStateToProps`, and `mapDispatchToProps` arguments. These argument are functions that you will write. 

&nbsp;

### **mapStateToProps(state, [ownProps](https://react-redux.js.org/api/connect))**

The first function that gets passed into `connect()` as an argument is `mapStateToProps`. This is how `connect()` knows how to map the state into your component's `props`. `mapStateToProps` takes in `state` which is supplied by the `Provider's` store `context`. It returns an object containing the relevant `props` for your component. 

&nbsp;

#### **ownProps (optional)**

A component with explicit `props` pasased down from its parent(e.g. < ConnectedComponent lastName={'Wozniack'} />) can merge these `props` with slices of `state` using `ownProps` which is an optional second argument to `mapStateToProps`

&nbsp;

### **mapDispatchToProps**

`mapDispatchToProps` is the second argument to `connect()`. It is a function that accepts the store's `dispatch` method. It too, returns an object containing keys that point to fucntions. These then can be called via dispatch to dispatch actions to the store. Again, these are also passed as `props` to the component. 

&nbsp;

### **Putting it all together**

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;5.37.43&#32;PM.jpg "Example of msp and mdp being used in connect()")

&nbsp;

### **Understanding The Innerworkings**

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;5.50.05&#32;PM.jpg)