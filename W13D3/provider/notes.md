# **< Provider />**

### **react-redux**

Up to this point we have only looked at `redux` node package, giving us the ability to create Redux `store` objects with `dispatch()`, `getState()`, and `subscribe()` methods usisng `createStore()`. However, this leaves us incomplete in terms of being able to build a fully operational React-Redux app. This is where `react-redux` with built in [**bindings**](https://en.wikipedia.org/wiki/Language_binding) comes in!

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;3.23.59&#32;PM.jpg)

&nbsp;

### **Threading Props: An Anti-Pattern**

We run into trouble with this setup when a deeply nested component needs to acess the store, while it's parents do not. Doing it just with React, these parents would till have to receive the `store` prop in order to pass it to their chilren. 

Passing down props through the entire component tree is known as **prop-threading** which is ripe for errors and extrmemly tedious. This can be avoided by using the `Provider /connect()` API provided by `react-redux`. 

&nbsp;

### **Provider: Setting** `context`

The `Provider` component from `react-redux` package allows us to pass the store to deeply nested components without explicity threading. This is done by designing a `root` component which takes `store` as an argument, and then wraps our `App` component with the `Provider` component like so:

![alt text](Screen&#32;Shot&#32;2019-12-05&#32;at&#32;4.03.13&#32;PM.jpg "Provider Example")

&nbsp;

Thus `Root` now will pass, `store` to all the rest of the nested components 'implicitly'. Components that need to access the store [context](https://reactjs.org/docs/context.html) will have to `connect()`, which converts the `store` context into a `store` prop. 

