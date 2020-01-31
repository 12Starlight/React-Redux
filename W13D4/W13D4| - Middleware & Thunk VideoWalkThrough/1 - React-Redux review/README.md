1. What is the Provider's job?
> Answer: We give it a prop of `store` and it makes this `store` available to all the components that we make. These container components do need to be special. The <kbd>store</kbd> `prop` is actually comming from our entry file where our <kbd>App</kbd> component is being rendered onto the page by `ReactDOM.render()` that comes from `react-dom` which we import. We just put the App onto the page and we give it a prop of store *inside* the `ReactDOM.render()` function as an argument:

Code:

![alt text](./Screen&#32;Shot&#32;2020-01-21&#32;at&#32;10.32.28&#32;PM.jpg "Example of passing in store as a prop to our App component")

&nbsp;

1. What do our mapStateToProps/mapDispatchToProps functions do?
> Answer: `mapStateToProps and mapDispatchToProps` are functions that make our container <kbd>smart</kbd> components. Esssentially the first function maps parts of state in terms of data to props in `mapStateToProps` using <kbd>state</kbd> as an argument. The second function maps actions being dispatched to props using `mapDispatchToProps` that takes <kbd>dispatch</kbd> as an argument. Whenever the store changes, <kbd>mapStateToProps</kbd> gets called. In both cases, these two functions are connected to the presentational component which gets access to both actions being dispatched and state via `props`. This is done by passing in the arguments <kbd>mapStateToProps</kbd> and <kbd>mapDispatchToProps</kbd> to the `connect()` function in order to link the `smart` container component to the presentational component which re-renders the page, each time the state or props change. This is done by the `connect()` function returning another function that takes in the presentational component as an argument. As a result, that component then wraps over the previous function getting access to its variables and arguments. Keep in mind that the container component is what will be rendered to the page. 

&nbsp;

1. How does our action creator function work?
> Answer: It is a function that return an POJO (Plain Old JavaScript Object). It is designed to make our objects dynmaic instead of having to hard code each object that reparesents an action that changes the store state. 