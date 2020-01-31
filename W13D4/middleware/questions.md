# Middleware Questions

What is a middleware?
> Answer: Software that intercepts a process, either to redirect it or generate some side effect. 

&nbsp;

What is a Redux middleware?
> Answer: It specifically refers to an `enhancer` passed to the Store via `createStore()`. When a `dispatch` is made, the middleware intercepts the `action` before it reaches the `reducer`.

&nbsp;

What are several things the Redux middleware can do?
> Answer: 
  * **resolve the action itself** (for example, by making an AJAX request),
  * **generate a side effect** (such as logging debugging information),
  * **send another dispatch** (if the action triggers other actions),
  * **pass along the action** (if the middleware is not concerned with it),
  * or some combination thereof. 

&nbsp;

What are we using Redux middleware for?
> Answer: It is being used for logging information about the store and making asynchronous API requests. 

&nbsp;

How do we use applyMiddleware?
> Answer: It is used by applying it as the third argument in createStore(), known as the `enhancer`.

&nbsp;

How does applyMiddleware work?
> Answer: It accepts multiple arguments, thus allowing more middleware to be applied when necessary.

&nbsp;

What is a `function signature` of applyMiddleware?
> Answer: It is the set of inputs and output of a function. A Redux middleware must follow the same signature pattern:

          const middleware = store => next => action => {
            // side effects, if any
            return next(action);
           };

&nbsp;

What does calling `next(action)` do?
> Answer: It passes the `action` onto the next middleware to be used, if it needs it.

&nbsp;

What are some middleware that we will be using?
> Answer: We will mostly be using logger and making asynchronous API requests.

&nbsp;

Logger needs to be the last middleware in applyMiddleware, why?
> Answer: If it not, then it will log the thunk and any involved promises which is what we do not want it to do. 