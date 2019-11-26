What is flux? And how is it related to React?
> Answer: Flux is a front-end application architecture, developed by Facebook to 
> use with React. It is not a library or a framework, but instead a pattern in 
> terms of how structure one's application. 

What are the different elements of Flux? And how are they implemented in Redux?
> Answer: Action, Dispatcher, Store and View

&nbsp;

#### Action

This begins the flow of data for Flux. It is just a simple object that holds a 
`type` property. The `type` indicates what change will take place on the 
application's state. Additional data, (the 'payload') could also be included in
order to change the application's former state to the next state. 

&nbsp;

#### Dispatcher

This is how actions get distributed or 'dispatched' to the Flux store. It is 
more involved than a registry of callback functions into the store. Redux uses
this part of Flux, except consolidates the dispatcher into a single `dispatch()`
funciton.

&nbsp;

#### Store

This where the entire state of the application is held. It has the responsiblity
of updating the state as actions are received. This done by registering with the
dipatcher a callback function that gets an action. This callback, then takes the 
action's type and uses it to invoke the proper function in order to change the
application's state. Afterwords, the store passes the new state by 
("emitting a change") to all the views that have registered listeners (callbacks) 
to it.  

&nbsp;

#### View

The unit of code responsible for rendering the UI. The pattern for Flux is 
completed by listening to the change events emitted by the store. When a change
happens at the data layer, the view responds by updating the internal state, and
then triggering a re-render.

A view can create actions via user-triggered events. If a user marks a todo as
complete, the view might call a function that would dispatch an action to toggle
the todo's state. By creating an action from the view layer, our Flux pattern
becomes a unidirectional loop.

Here the original action could result from an asynchronous request to fetch todos
from the database with a success callback to dispatch our action in order to 
receive todos, and then update the applications's state. Normally a pattern in 
Flux is to dispatch and action that populates the initial state, with then further
modifications coming from the client. 

&nbsp;

## Redux

Redux is a node package that helps with the implementation of Flux. A Redux loop
has slight variations from a vanilla Flux loop, but we can expect the same overall
concepts to remain the same. Redux operates under three principles. 

![alt text](./Screen&#32;Shot&#32;2019-11-26&#32;at&#32;12.57.44&#32;AM.jpg "Redux Loop")

&nbsp;

What are the 3 principles of Redux? 
> Answer: Single Source of Truth, State is Read-Only, and Only Pure Functions 
> Change State. 

How can you change the Redux state? 
> Answer: We can change the redux state by dispatching an action.