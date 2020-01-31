# Redux Middleware

### **Summary**

Middleware as demonstrated with [Rack](https://guides.rubyonrails.org/rails_on_rack.html), is software that intercepts a process, either to redirect it or generate some side effect. 

This is known specifally as referring to the middleware as an `enhancer` in Redux, that gets passed to the Store via `createStore()`. When a `dispatch` is made, the middleware intercepts the `action` before it reaches the `reducer`. This gives the middleware the ability to:
  * **resolve the action itself** (for example, by making an AJAX request),
  * **pass along the action** (if the middleware is not concerned with it),
  * **generate a side effect** (such as logging debugging information),
  * **send another dispatch** (if the action triggers other actions),
  * or some combination thereof.

&nbsp;

We will utilize Redux middleware in order to log information about the store and making asynchronous API requests, but you can also use it for crash reporting, routing, and many other applications.  

&nbsp;

### **Applying Middleware to a Redux Store**

Remember the `redux` library's `createStore()` function used to instantiate a `Store`. `createStore()` accepts 3 arguments (`reducer, preloadedState, enhancer`); middleware is given to the store via the optional `enhancer` argument. Here is an example using `logger` middleware as an `enhancer`:

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;3.55.57&#32;PM.jpg "Logger Middleware")

&nbsp;

Before any actions get dispatched to the `store`, they pass first through our `logger` middleware, which prints the store's state before and after the `action` is processed. 

**Note:** `applyMiddleware()` ** *accepts multiple arguments* **, so we can also apply more middleware, if necessary. 

&nbsp;

### **Middleware Signature**

In addition to importing third-party middlewares such as the `logger` above, you will sometimes need to roll your own. In order for this to be done, each middleware function must conform to the same signature in order for their to be no issues with compatability for the `Store` and any other middlewares. 

What is a **[function signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function)**, you might ask? It is a set of inputs and the output of a function. A Redux middleware must always have this pattern signature: 

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;4.11.08&#32;PM.jpg "Function Signature For Redux Middleware")

&nbsp;

Each middleware has the `store` as an argument and returns a function that takes the `next` link in the middleware chain as an argument. That function, then returns *another* function that takes in an `action` argument which then triggers any side effects before returning the result of the `next(action)`. These side effects could include, triggering AJAX requests, logging to the console, and much more! Side effects also, can take place **after** the `next(action)` is called. Here is an example:

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;4.16.53&#32;PM.jpg "Example of side effects happening after next(action)")

&nbsp;

### **Example: Logger**

Now let us make from scratch, the `logger` we imported above. We want it to print out the state before and after each dispatch, allowing us to check if our reducers are working as expected. It should do the following as middleware:
  * receive the store as its only argument,
  * return a function that receives the `next` middleware,
  * which should itself return a function taking in an `action`. 

The innermost function body is where logging will take place and should do the following:
  * `console.log` the `action`
  * `console.log` the result of `store.getState()` (pre-dispatch)
  * call `next(action)` to pass the action on to the rest of the middlewares, and eventually, the reducer.
  * save the `result` of the `next(action)` variable, to be returned later.
  * `console.log` the new `store.getState()`
  * return the saved `result`.

&nbsp;

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;7.54.47&#32;PM.jpg "Logger Middleware Example")

Now, each time an action gets dispatched, we can see the effect on the `Store`.

&nbsp;

### **redux-logger**

Moving forward with Redux, we will want to have access to our store's state for debugging purposes. Using the `redux-logger` npm package and adding it as a middleware gives us access (via the console) to the previous state, action, and next state with every dispatch that takes place. This is incredibly convenient for debugging purposes and avoids such unpleasantness as attaching the `store` to the `window`. 

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;8.07.15&#32;PM.jpg "Example of what logger looks like in the console")

&nbsp;

To implement:
  * include the `redux-logger` package:
      
        npm install redux-logger --save 

  * pass an instance of `redux-logger` to `applyMiddleware` when creating your store:

![alt text](./Screen&#32;Shot&#32;2020-01-10&#32;at&#32;8.10.27&#32;PM.jpg "Example of how to pass in logger to applyMiddleware")
