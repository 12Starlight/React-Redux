1. How are the event handler functions in our react components(update, handleClick) working?
> Answer: Event handler functions work by calling `prop` keys that point to dispatched `action creators`. These get created with `mapDispatchToProps`. 

&nbsp;

2. What am I sending to my component as part of `mapDispatchToProps`?
> Answer: We are sending the `dispatch` function from the store and passing in the `action creators` invoked which then get set to a key in an object as a `prop`. 

&nbsp;

3. What is a controlled input?
> Answer: It is when we create a value tag in the input and call: 
  * `this.setState({body: e.target.value})`
    * the value is going to be whatever we set in the `body`
    * notice how we need a `local state` inside the parent component for this to work

&nbsp;

![alt text](./Screen&#32;Shot&#32;2019-12-11&#32;at&#32;4.32.53&#32;PM.jpg "Example of Controlled Input")
