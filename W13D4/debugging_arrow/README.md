# Debugging Arrow Functions In React 

### **Summary**

Arrow functions are everywhere in React and Redux. Here is an example from the `actions` reading on action creators:

![text alt](Screen&#32;Shot&#32;2020-01-16&#32;at&#32;7.04.12&#32;PM.jpg "Example of how we can not debug arrow functions with implicit returns")

&nbsp;

Looking at the <kbd>clearFunction</kbd> example in [the reading on arrow functions](https://open.appacademy.io/learn/swe-online/react/es6-arrow-functions), parenthesis are a common way to implicity return objects using ES6. For this reason, the above will just not work. We just simply can **not** put a debugger inside of a return statement!

Instead, in order to put a debugger inside of <kbd>addFruit</kbd>, we first need to convert it into a function with an explicit return statement: 

![text alt](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;7.15.05&#32;PM.jpg "Example of how to property use debugger in an arrow function by converting it into a function")

To see it in action 😉 [check it out]("https://assets.aaonline.io/fullstack/react/assets/debugging_arrow_functions.gif")

&nbsp;

In order to have to consistantly repeat doing this, just create a habit of writing **ALL** of your arrow functions with *explicit* return statements. Keep in mind, this is a common pattern in Redux and you can expect to see it out in the world. 