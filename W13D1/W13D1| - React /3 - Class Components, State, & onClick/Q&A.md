1. What is `state` inside a React component?
> Answer: Local state that gets initialized in the constructor. State represents data
> that we want to change by using `this.setState()` which also triggers a re-render of
> that component. 


2. What are `class components`?
> Answer: Components that we want to have local state or bind functions inside the
> constructor. 


3. Why do we need to care about binding for our `onClick` and other event handlers?
> Answer: We want to bind that function to the instance itself in order to get access
> to it inside our components. 