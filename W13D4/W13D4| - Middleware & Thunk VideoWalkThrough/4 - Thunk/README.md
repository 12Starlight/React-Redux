1. What is thunk's job?
> Answer: It determines, if the <kbd>action</kbd> is a function which in that case gets the action gets invoked or it determines whether the action is not a function. In the second case we just want to continue on with the chain of middlewares until there are no more middlewares and we dispatch a <kbd>POJO</kbd> action object which then gets sent to the reducer to update the store via a new state. 

&nbsp;

1. How do we delegate our `thunk action creators` to our components?
> Answer: We use in our <kbd>smart</kbd> container component, <kbd>mapDispatchToProps</kbd> which takes <kbd>dispatch</kbd> as an argument to map our `thunk action creator` to dispatch to props. The component then gets access to this function via props. This is often dispatched in the `componentDidMount()` React lifecycle method. 

&nbsp;

2. how/why is redux logger useful?
> Answer: It logs everything that makes it into our store. It logs the previous state, the action, and the next state after the action has updated the store. 