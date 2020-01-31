# Object.freeze(oldState) Questions

Why must a reducer never mutate its arguments? 
> Answer: It is a redux rule to manage state. If the state changes, the reducer must return a new object. 

&nbsp;

What does Object.freeze(oldState) do?
> Answer: It prevents new properties from being added to a project, while also preventing propertiess currently on an object from being altered or deleted. Thus, making the object immutable. 

&nbsp;

Does Object.freeze() make a deep or shallow freeze?
> Answer: It makes a shallow freeze. 