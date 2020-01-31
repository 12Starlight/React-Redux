# Action Questions

What is an action creator and what does it return?
> Answer: An action creator is a function that allows us to create customizable action payloads. An action creator returns a plain old JavaScript object. 

&nbsp;

How do we dispatch an action?
> Answer: We pass the response of calling an action creator, into `store.dispatch(response)` or `store.dispatch(actionCreator(action))`. 