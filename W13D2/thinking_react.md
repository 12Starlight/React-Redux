# Thinking In React

## Step 1: Break The UI Into A Component Hierarchy
  * draw boxes around every component, subcomponent, and give them names
  * a component should idealy only do one thing
  * make sure your JSON data model maps nicely with your UI
  * separate your UI into components, each matching one piece of your data model

&nbsp;

## Step 2: Build A Static Version In React
  * build a version that uses the data model to render the UI, but without interactivity

#### Building A Static Version
  * build components that reuse other components
  * pass data using props, do not use state
    * state is used for interactivity, data that changes over time
  * smaller projects, build top down
  * larger projects, build bottom up and write tests as you build
  * only have the render() method 
  * pass the parent component the data model as a prop

> Note: It is best to separate the processes. Building a static version requires lots of
> typing and no thinking, and adding interactivity requires a lot of thinking and not a 
> lot of typing. 

&nbsp;

## Step 3: Identify The Minimal ( but complete ) Representation Of UI State
  * determine the minimal set of mutable state your app needs

&nbsp;

## Step 4: Identify Where Your State Should Live
  * identify which component mutates, or owns, this state

#### Each Piece Of State In Your Application:
  1. Identify every compoenent that renders something based on that state.
  2. Find a common owner component (a single component above all the components that need the state in the hieracrchy).
  3. Either the common owner or another component higher up in the hierarchy should own the state
  4. If you can not find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhare in the hierarchy above the common owner component. 

&nbsp;

#### Step 5: Add Inverse Data Flow
  * connect your forms, inputs, textarea's, to event handlers that change your state
    * use `setState()` 