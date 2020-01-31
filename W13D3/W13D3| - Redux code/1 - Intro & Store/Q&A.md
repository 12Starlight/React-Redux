1. How do we pass props now that we have Redux?
> Answer: We wrap our entire app in a `< Provider />` component which gives access to the store via `props`. These `props` can still be directly passed via the parent componet. Mainly though, props are created in a container component using two functions `mapStateToProps` and `mapDispatchToProps`. 

&nbsp;

2. What does `dispatch` do?
> Answer: It is the way we effect changes to the store `state`. This is done by dispatching an `POJO` object (Plain Old Vanilla Object) that has the information that we want to do. It goes into the reducer that takes the current state of the store, and what we want it to look like after the action has been dispatched.  

&nbsp;

3. What is the square bracket syntax for js in an object key(20:15) doing?
     * `state.bleats[newBleat.id] = newBleat`

> Answer: It is saying to the computer, 'hey evaluate this first, then set that to the key that we want in the object'. 