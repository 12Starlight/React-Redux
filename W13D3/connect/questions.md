# Connect Questions

## **connect()**

What arguments does the connect function take?
> Answer: `mapStateToProps` and `mapDispatchToProps`

&nbsp;

What does the connect function return?
> Answer: It returns a function. 

&nbsp;

How do we connect our presentational component using the connect function?
> Answer: Our `connect()` returns a function that then takes the React presentatonal component and returns a new React component that is connected to the store.  

&nbsp;

## **mapStateToProps**

What are the arguments to mapStateToProps?
> Answer: `state` and `ownProps`

&nbsp;

What is the return value?
> Answer: It returns an `object` containing the relevant `props` for your component. 

&nbsp;

Where is that return value going?
> Answer: It is going to the presentational component. 

&nbsp;

What is ownProps?
> Answer: `ownProps` represent explicit props passed down from the parent component.

&nbsp;

## **mapDispatchToProps**

What are the arguments to mapDispatchToProps?
> Answer: `dispatch` and `ownProps`

&nbsp;

What is the return value?
> Answer: It too, returns an `object` with keys that represent `props` that point to functions.

&nbsp;

Where is the return value going? 
> Answer: It goes to the presentational component. 