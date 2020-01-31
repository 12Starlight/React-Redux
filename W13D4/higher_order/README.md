# High Order Functions

### **Summary**

Functions that are used by other functions by either, using them as an argument or returning them are called **higher-order functions**. If they passed in as an argument, these types of functions are known as **callbacks**

&nbsp;

### **Closures**

A **closure**, which can be referred to as *lexical scoping*, is a function that utilizes **free variables**, that is variables defined outside of its scope. When writing higher-order functions, `closures` come in handy.

![alt text](./Screen&#32;Shot&#32;2020-01-08&#32;at&#32;4.57.28&#32;PM.jpg "Callback Example")

&nbsp;

As we can see above, the `calculator` function receives a callback as an argument (`operationCb`) which is called in the anonymous function `calculator` returns. This return value would not work if the inner function could not close over `operationCb`, a variable defined outside of its scope. 

&nbsp;

### **Composing Functions**

This really was introduced to you in math class, where a function consist of two functions: 

![alt text](./Screen&#32;Shot&#32;2020-01-08&#32;at&#32;5.18.53&#32;PM.jpg "Function Consisting of Two Functions")

&nbsp;

### **Currying Functions**

We have already written `Function.prototype.curry` that takes as an argument a number `n` representing the total number of arguments to be passed in and collects these arguments until their count reaches that `n`. Once it reaches that `n`, it calls the original function. Following this pattern, we can now write functions that take in multiple arguments in real time as they become available and, in the meantime, be passed around among other functions.

&nbsp;

### **ES6 Syntax**

Higher-order functions are easier than ever now using ES6 syntax and fat-arrow function notation. The following is an example demonstratingt this. 

![alt text](./Screen&#32;Shot&#32;2020-01-09&#32;at&#32;7.47.29&#32;PM.jpg "Example of higher-order functions using fat-arrow")

&nbsp;

### **Summary of Higher-Order Functions**

* Higher-order functions are functions that:
  * Define and return functions;
  * Accept callbacks as arguments;
  * Or do both. 