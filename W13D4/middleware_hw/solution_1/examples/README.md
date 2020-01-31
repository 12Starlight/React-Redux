# **Phase 1** 

First we need to create a logger function and define it in `todo_redux.jsx`. This function is going to console.log() the state before the dispatch, console.log() the action, call the local copy of `store.dispatch`, passing it the action, then console.log the state **AFTER** the action has been dispatched and the state has been updated. This function then needs to be added to the window, along with an action that is being tested and the store. 

![alt text](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;9.11.47&#32;PM.jpg "Defining The Logger Function")

&nbsp;

How to test it in the console: 

![alt text](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;9.16.39&#32;PM.jpg "Example of testing function in console")

&nbsp;

# **Phase 2**

This one is a little bit more complicated and took me all day to truly understand all the interworking of why it works the way it does. First we need to define our middleware. In this case it was our logger function, however other example being much simpler laid out three middlware function. Next we need to define our apply middleware, keeping in mind that we want each middleware that gets called to be linked to the previous middleware function. Then the last middleware call will dispatch our POJO action. The following is the result:

![alt text](./Screen&#32;Shot&#32;2020-01-17&#32;at&#32;10.12.27&#32;PM.jpg "Example of Middleware Being Used In ApplyMiddleware")

&nbsp;

![alt text](./Screen&#32;Shot&#32;2020-01-17&#32;at&#32;10.14.11&#32;PM.jpg "Example of dispatching an action and running the middleware as a result")

&nbsp;

Keep in mind that <kbd>dispatch</kbd> gets redefined on line 75 and this new redefined <kbd>dispatch</kbd> becomes the new `dispatch` that wraps next and thus `next` becomes that previous **evaluated** middleware! Please see notes for further explanation. 

&nbsp;

# **Phase 3 & Bonus** 

So, this is just like we use in our projects. First, we comment out all the in house middleware that we created from scratch, including `applyMiddleware`. Next, we go to the file store.js and `import { applyMiddleware } from 'redux'`. This is how we get the built in <kbd>applyMiddleware</kbd> from `redux`. 

This is followed up by adding any middlware we want defined that we want to add to applyMiddleware. After all the middleware has been defined, we add a call to `applyMiddleware` inside the `createStore()` call **after** the second argument <kbd>preloadedState</kbd>. Inside the call to `applyMiddleware` we pass in our middlware we defined above as arguments. Finally, to test it, we dispatch an action in the console. 

The code:

![text alt](./Screen&#32;Shot&#32;2020-01-21&#32;at&#32;3.55.51&#32;PM.jpg "Example of import applyMiddleware code snippet")

&nbsp;

The console:

![text alt](./Screen&#32;Shot&#32;2020-01-21&#32;at&#32;3.57.12&#32;PM.jpg "Testing the applyMiddlware in the console")