# Selectors

### **Summary**

These are functions used to format and extract data from the application `store` state in different shapes. For example:

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;7.22.16&#32;PM.jpg)

The slice of state `todos` are stored as an object. Keys correspond to `todo.id`'s and values correspond to `todo` objects. This has a time complexity of O(1) for the lookup of a single todo. However, we run into a problem when storing all of the todos as values of an object and we want to render them all at once. The way we get around this is by using `selectors`.
  * Define all of your app's selectors in a `frontend/reducers/selectors.js` file and export them.
  * Selectors are passed the app's `state` and return information from the application `store` state in a specified form (e.g. an array). 
  * Use selectors to format different slice(s) of state by calling them in a container's `mapStateToProps`. 