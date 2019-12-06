# Window Questions

What is the window?
> Answer: It is just a POJO(Plain Old JavaScript Object), and is the global object.

&nbsp;

How can we use the window?
> Answer: We can test code as a dev, and improve the user's experience as well. We can set it to the window by doing `window.functionName = functionName`. Another way, we can define the function in a utility file, then set it to `window.functionName = functionName`. Then import it into a presentational component, and then render that component. We want to make sure code attached to the window for testing and dev purposes, gets deleted before our application goes to production though. If not, it could be a major security issue for our app.  