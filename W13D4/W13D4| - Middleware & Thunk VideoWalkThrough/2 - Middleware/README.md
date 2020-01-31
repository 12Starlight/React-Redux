1. What is a middleware?
> Answer: It is code that runs inbetween two different things. Essentually, we are injecting inbetween <kbd>dispatch</kbd> and the <kbd>store</kbd>. This middleware intercepts the calls to dispatch before they make their way to the `rootReducer`.

&nbsp;

2. what does `next` refer to inside of each of our middleware functions?
> Answer: It refers to the <kbd>next</kbd> function in the chain. The inner function of the next middleware gets called when `next` is called. It must be actively called with an action in order for the chain of middlewares to be linked to each other and the action gets passed to dispatch eventually. <kbd>dispatch</kbd> comes internally from Redux which gets us into the <kbd>rootReducer</kbd>.