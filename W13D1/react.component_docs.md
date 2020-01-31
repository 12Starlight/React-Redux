# React.Component
## Lifecycle Methods
![alt text](Screen&#32;Shot&#32;2019-11-20&#32;at&#32;7.51.26&#32;PM.jpg "Common Lifecycles")

&nbsp;

#### Mounting
> These methods are called in the following order when an instance of a 
> component is being created and inserted into the DOM:
  * **constructor()**
  * static getDerivedStateFromProps()
  * **render()**
  * **componentDidMount()**

Note: componentWillMount() is no longer valid

&nbsp;

#### Updating
> An update can be caused by changes to props or state. These methods are
> called in the following order when a component is being re-rendered:
  * static getDerivedStateFromProps()
  * shouldComponentUpdate()
  * **render()**
  * getSnapshotBeforeUpdate()
  * **componentDidUpdate()**

Note: componentWillUpdate() and componentWillReceiveProps() are no longer valid

&nbsp;

#### Unmounting
> This method is called when a component is being removed from the DOM:
  * **componentWillUnmount()**

&nbsp; &nbsp;

## Reference

#### render()
> The <kbd>render()</kbd> function should be pure, meaning that it does not 
> modify component state, and it does not interact with the browser. Use 
> `componentDidMount(), if you want to interact with the browser. 

&nbsp;

#### constructor(props)
> **If you are not initializing state or binding methods, do not use**
  * called before the component is mounted
  * when implementing the constructor for React.Component, call super(props)
  * initialize local state by assigning an object to this.state
  * bind event handler methods to an instance 

Note: You should **not** call `setState()` in the constructor(). If you are 
going to use local state in your component, **assign the initial state to this.state**
directly in the constructor. The constructor is the only place to assign `this.state`.  

&nbsp;

#### componentDidMount()
> This is invoked immediately after a component is mounted. This is the perfect
> place to insert DOM nodes for initializing a component. Good place to instantiate
> a network request.

&nbsp;

#### componentDidUpdate(<kbd>prevProps</kbd>, <kbd>prevState</kbd>, <kbd>snapshot</kbd>)
> Invoked after an update, and not called intially. Good place for network requests by
> comparing the current props to previous props. 

![alt text](Screen&#32;Shot&#32;2019-11-20&#32;at&#32;8.39.01&#32;PM.jpg)

&nbsp;

> You can also call `setState()`, but it must be wrapped in a condition like above.

&nbsp; 

#### componentWillUnmount()
> It is invoked before a component is unmounted and destroyed. This is a good place
> to perform all the cleanup including, invalidating timers and canceling network 
> requests. Do not call `setState()`, due to the component never re-rendering, 
> once a component instance is unmounted, it will never be mounted again. 