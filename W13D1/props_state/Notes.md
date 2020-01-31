React components keep track of data via two important properties:
 * `this.props` and `this.state`

In the dog example, a new instance of the `Dog` component is passed 
<kbd>name</kbd> and <kbd>breed</kbd> properties, which can be read inside
the component as `this.props.breed` and `this.props.name`.

&nbsp;
### Props
Remember, a component should not change and props are only used by a parent 
component in order to trigger a change or re-render the child component. New 
props, cause lifecycle methods to deal with the change, and then by default, 
re-render the component. When you want to trigger a re-render indside the 
component, use componenet state. 

&nbsp;
### State 
Unlike props. `this.state` mean the properties of that component can be altered
by the component itself. Best for keeping track of internal data, often in the
shape of forms. Only use state when you want want to change the information, 
otherwize use props. 

&nbsp;
#### How To Set State
Normally done at initialization, state can also be reset using `this.setState` 
during certain points of its lifecycle. Each time it is done, that component
also calls `render()` with the new state. Said again, a component re-renders
whenever its state changes. 

&nbsp;
#### WordInput
In the `WordInput` example, the initial state is `{ word: '' }`. When it is 
rendered, we register an **event listener** on the <kbd>input</kbd> via its 
`onChange` prop. Whenever the <kbd>input</kbd> changes its value 
(via user input), `onChange` is called. A **change handler** `this.updateWord` 
calls `this.setState()` which then sets `this.state.word` according to the
input's most recent value. This causes the component to re-render once again 
with the new state which updates the text of the span. 

Always use `this.setState()` due to it re-rendering the page keeping your 
component in sync. Also, do not call `this.setState()` inside of `render()`. 

&nbsp;
#### Asynchronicity of setState
Do not rely on `this.setState's` value for calculating the next state. So, to
solve this lag we want to pass in a second callback as the second argument for
`this.setState()`. This will not run until after the state has been updated, 
thus you are garenteed to actually reflect the change. 

Also, `setState()` takes two arguments, the first being an object with keys, the 
second being a callback function for after the state has been set. 


