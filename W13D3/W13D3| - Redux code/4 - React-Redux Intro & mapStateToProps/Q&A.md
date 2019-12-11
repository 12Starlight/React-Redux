1. What do we mean by "slice of state"?
> Answer: Each category of the overall state is know as a `slice` of `state` that is managed by a `reducer` for only that `slice` of `state`. 

&nbsp; 

2. How does `connect` work?
> Answer: It is a function that returns a function. Esentially it returns the container function and takes `mapStateToProps` and `mapDispatchToProps`. When ever the state changes at all, it returns an object with the keys of the props to be whatever the prop should be for that component. It does this by each function taking in the entire `store state`.   

&nbsp;

3. How do you turn the keys value pairs of the bleats into an array?
> Answer: bleats: Object.values(state.bleats); 