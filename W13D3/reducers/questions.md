# Reducer Questions

What will be the initial current state when the store initializes?
> Answer: If the `state` is not set to a default value, it will be undefined. 

&nbsp;

How does combineReducers work?
> Answer: It accepts an object as an argument that has keys pointing to reducers
> that represent that particular slice of state. 

&nbsp;

What is a slice of state?
> Answer: A slice of state is a piece of the overal store state, that represents
> a category within the whole of the store state. 