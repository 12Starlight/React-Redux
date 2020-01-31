# Exercises Phase 2 

## **Redux**

### **Overall Structure**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;4.16.27&#32;PM.jpg "Overall Structre")

&nbsp;

### **Build Reducer**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;4.47.04&#32;PM.jpg "Build Reducer")

&nbsp;

### **Build Store**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;4.30.04&#32;PM.jpg "Build Store")

&nbsp;

### **Update Entry**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;4.39.08&#32;PM.jpg "Update Entry")

&nbsp;

### **Examples on the Window**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.11.05&#32;PM.jpg "Examples on the Window")

At this point, there are a couple of things to notice. The action type must match 'exactly' the `action.type` in the reducer. The other thing to notice is that we normally do not dispatch actions in this way. Instead, we use `action creators` which simply return a Plain Old JavaScript Object. The last thing to notice is that we want to make sure we are using the correct keys in our `oldState`. 

      // looks great, but does not work
      // does not access any keys on oldState which is just a giant object
      return { fruits: [...oldState, action.fruit] } 

      // looks great, and works correctly
      // here we are accessing the slice of state we want by using the correct key
      return { fruits: [...oldState.fruits, action.fruit] }

&nbsp;

### **Build Action Creators and Add to Window**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.25.46&#32;PM.jpg "Build Action Creators")

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.28.27&#32;PM.jpg "Putting on the Window")

&nbsp;

### **Build Constants and Import to Reducer** 

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.37.56&#32;PM.jpg "Build Constants")

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.40.24&#32;PM.jpg "Import Constants to Reducer")

Now that we have our `constants`, we pretty much have evething we need for setting up our Redux state managemnet.

&nbsp;

## **Containers and Components** 

### **Overall Structure**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;5.53.39&#32;PM.jpg "Overall Structure")

&nbsp;

### **Build Fruit Stand Container**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.07.08&#32;PM.jpg "Fruit Stand Container")

&nbsp;

### **Build Fruit Stand Presentational Compoenent and Import to Entry**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.22.31&#32;PM.jpg "Presentational Component")

Our `presentational component` must return one element only. 

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.27.41&#32;PM.jpg "Import to Entry")

A couple of things to notice here. We are not importing the `presentational component`. Instead, we are importing the `< FruitStandContainer />` that wraps our presentational component, thus our presentational component is by default returned too. Next, we have import statements that come directly from the `react` and `redux` library. It is best to separate these from your other component imports.  

The `container component` is responsible for generating the props, while the `presentational component` is responsible for using the props. We get the `application state` from `connect()`. In order to give the `connect()` function our Redux application state which is passed to `mapStateToProps`, we have to use the `< Provider />`. The Provider has a `store` prop that makes our Redux store globaly available in our component hiarchy. 

&nbsp;

### **Putting It Together**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.40.15&#32;PM.jpg "Putting It Together")

&nbsp;

### **Adding Event Handlers and Creating Prop Keys that Dispatch Action Creators**

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.57.48&#32;PM.jpg "Adding Event Hanlders")

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;6.58.53&#32;PM.jpg "Creating Prop Keys that Dispatch Action Creators")

&nbsp;

![alt text](./Screen&#32;Shot&#32;2019-12-06&#32;at&#32;7.03.49&#32;PM.jpg "User Interface")


A few things to notice here. It is important that our presentational component uses the `onClick={}` event handler and passes only the name of the `prop` to make the site iteractive for our user. Next, in the container we want to pass as an argument the `invoked action creator`. Last, we are able to access our `props key` directly by using `object deconstruction`.  




