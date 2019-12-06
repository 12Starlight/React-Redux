# Exercises Phase 2

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


