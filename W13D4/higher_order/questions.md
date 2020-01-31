# Higher Order Questions

What is a callback function?
> Answer: Functions that are passed in as parameters.

&nbsp;

What is a free variable?
> Answer: Variables that are defined outside of their scope.

&nbsp;

What is a closure?
> Answer: Also known as *lexical scoping*, `closure` uses **free variables** by wrapping around them. This allows the function to access these *captured variables* through the closure's copies of their values or references, even when the function is invoked outside their scope. 

&nbsp;

How do free variables and closures work hand in hand?
> Answer: Closure allows access to variables captured inside the closure to be accessed even when the function is invoked outside of those variable's scope. 

&nbsp;

What is currying?
> Answer: Currying uses asymmetry to utilize a pattern that allows us to write functions that can take arguments as they become available while at the same time being able to pass these functions around to other functions. 

&nbsp;

How can you use fat-arrow functions to easily write a higher-order function?
> Answer: ES6 fat arrow functions are automatically bound to the context of `this` that existed when they were defined. So, we can write arguments followed by an arrow to achive the same results as writing nested return statements of functions. 

![alt text](./Screen&#32;Shot&#32;2020-01-09&#32;at&#32;7.47.29&#32;PM.jpg "Example of writing a higher-order function using fat arrow")
