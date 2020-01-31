# Thunks

### **Summary**

The biggest problem we want our middleware to handle is `asynchronicity`. This is why when building web applications, we need to request resources using middleware to interact with the server. Then dispatch the response to our store, when we get a response. This is done using API calls from our components and using dispatch synchronously on success. However, for consistancy and reusability we would prefer to have the source of every change to our app state be an action creator. Thunks are a new kind of action creator that will allow us to do that!

Instead of returning a plain object, a <kbd>thunk action creator returns a function.</kbd> This function, when called with an argument of `dispatch`, can then dispatch one or more actions, immediately, or later. Here is an example.

![alt text](./Screen&#32;Shot&#32;2020-01-13&#32;at&#32;2.41.28&#32;PM.jpg "Example of thunk using dispatch")

&nbsp;

This looks great, but is flawed bc without custom middleware it will break as soon as the function action hits our reducer. First all actions of type `function` need to be intercepted by middleware, then we need to trigger <kbd>dispatch</kbd>. 

![alt text](./Screen&#32;Shot&#32;2020-01-13&#32;at&#32;2.51.13&#32;PM.jpg "Example of thunk intercepting actions with type function")

&nbsp; 

Keep in mind, we also passed in the `getState` function in case our async action creators need access to our application state. Now let us move on to a more solid example.  

Say that we are building a web application that stores a user's contacts. On logging in we will need to fetch all of that user's contacts from our database. We would use middleware to trigger the AJAX request responsible for this action. Our AJAX request might look something like the following:

![alt text](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;5.16.59&#32;PM.jpg "AJAX and Action Creator Example")

&nbsp;

Much like the logger from the previous reading, `thunk` middleware is available as the `redux-thunk` library. The middleware, we just wrote is almost the entire original library! [Check out the source code!](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js) For more on thunks and handling asynchronicity in Redux, you can take a look at [this interesting SO post from the creator](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)

