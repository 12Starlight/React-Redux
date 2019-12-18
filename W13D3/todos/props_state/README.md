# **Props and State**

The way React components keep track of data happens using two properties: `this.props` and `this.state`. Both are objects that respresent data that the component needs, so that it may render. 

&nbsp;

### **Props**

These are properties of a component that get passed at the time of initialization. As you can see below `this.props` now can be accessible via the component's instance mehtods. 

&nbsp;

![alt text](./Screen&#32;Shot&#32;2019-12-18&#32;at&#32;11.26.28&#32;AM.jpg "Props")

&nbsp;

Above, a new instance of the `Dog` component gets passed `name` and `breed` properties. Now as a result, they can be read inside the component as `this.props.breed` and `this.props.name`. The following is what the rendered HTML would look like. 

      <div>Name: Fido, Breed: Greyhound</div>


Keep in mind, `props` are for a parent component to trigger a change or re-render a child component. So, we NEVER want to change a component's own props. These changes will be handled by lifecycle methods. Instead, use the component state, if we want to trigger a re-render inside that component. 

&nbsp;

### **State**

Unlike props, `this.state` represents the properties of a component that can be altered by the component itself. 

#### When to Use State

Anytime a component needs to keep track of data that can be changed. Normally, state is used to manage `controlled inputs`. If information does not change, that is when you use `props` instead. 

&nbsp;

#### How State is Set

Although state can be defined at initialization, a component can also set its own state during its lifecycle by calling `this.setState()`. Each time it is called, the component automatically will call `render()`, thus re-rendering that component. 

![alt text](Screen&#32;Shot&#32;2019-12-18&#32;at&#32;11.45.48&#32;AM.jpg "Seting State")

&nbsp;

In the above example `WordInput` sets an initial state of `{word: ''}`. As soon as it gets rendered, an **event listener** fires using `onChange` inside the `input` as a `prop`. Each time the `input` changes its value (via user input), `onChange` get called. We must bind this inside our constructor, so that `this` is bound to our component. This function is called a **change handler**, which calls `this.setState()`, and then sets `this.state.word` to the input's current value. The component then gets re-rendered with the new state, and updates the text inside the `span`.

Always use `this.setState()` instead of `this.state =` any place outside the component's constructor. This is due to `this.setState()` also, re-renders the component. If you just set `this.state` by itself, the component will not re-render. Lastly, do not call `setState()` inside of render, otherwise you will create an infinite loop, constantly re-rendering the component. 

&nbsp;

### **Asynchronicity of setState**

Do not rely on `this.setState()` for calculating next state. As soon as our component mounts, `this.state.word` will be `''`. If we type the letter `a` into the input, the event handler will run and set `this.state.word` to `a` but it will not happen synchronously. So, when we `console.log` on the next line we only see `''` instead of `a`.

This can be remedied using `setState()'s` optional second argument which takes in a callback. Be asured that the callback must run AFTER the state has been updated. So then, using `this.state` inside the callback will give an acurate depiction of the changes taken place to state. Thus, we could re-write our function as so:

![alt text](./Screen&#32;Shot&#32;2019-12-18&#32;at&#32;12.02.11&#32;PM.jpg "Refactored")