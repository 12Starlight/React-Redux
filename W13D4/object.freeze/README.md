# Object.freeze

### **Summary**

As we learned in the [Redux reducer](https://open.appacademy.io/learn/swe-online/react/reducers) reading, it is very import that a reducer **not** mutate its arguments. This means, if state changes, a new object needs to be returned by the reducer. 

One solution, is to use Javascript's [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). It prevents any new properties from being added to an object, while also preventing properties currently on an object from being altered or deleted. This essentially, makes the object immutable, giving us what we need.

By calling `Object.freeze(state)` at the top of every reducer, we can ensure that the state i snever accidently mutated. For example, this is what our farmer reducer from our fruit stand app would look like:

![alt text](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;5.56.02&#32;PM.jpg "Farmer Reducer Example")

&nbsp;

Using `Object.freeze(oldState)` we can be sure that there will not be any mutation. Here is another example:

      const people = { farmers: { name: 'Old MacDonald' }};
      Object.freeze(people);

&nbsp;

When you try to mutate an object that you *froze* by modifying a property, it will be prevented.

      people.farmers = { name: 'Young MacDonald' };
      people; // => { farmers: { name: 'Old MacDonald' }}

&nbsp;

**NB: This is not a deep freeze.** Nested objects can still be mutated, so be careful. Here is an example:

      people.farmers.name = 'Young MacDonald';
      people; //=> { farmers: { name: 'Young MacDonald' }}