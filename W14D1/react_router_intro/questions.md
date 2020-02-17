# **Intro To React Router Reading Questions**

What is the purpose of React Router?
>Answer: It is a frontend routing library for `React`. Using the browser <kbd>location</kbd>, it allows us to control which components we want to display. This gives us the advantage of making the browser <kbd>location</kbd> and <kbd>history</kbd> a part of the global state of our app. A feature of <kbd>location</kbd> that makes it different from the `Redux` state is the fact that a user can copy and paste a URL and email it to a friend or save it or link to it from their own website. 

&nbsp;

What does the HashRouter do for us?
>Answer: It is the primary component of the <kbd>router</kbd> that wraps our route hierarchy. It works similar to the <kbd>Provider</kbd> in that it passes all the information from <kbd>router</kbd> down to the child descendent components. 

&nbsp;

What is the Route component and what is the purpose of it?
>Answer: It is used to wrap another component, making sure that component is only rendered when a certain URL is matched.

&nbsp;

What are the possible props of the Route component and what do they do?
>Answer: They are <kbd>component</kbd>, <kbd>path</kbd>, <kbd>exact</kbd>, and <kbd>render</kbd>, which do the following:
  * component: This prop takes a refrence to the component to be rendered.
  * path: The wrapped component will only be rendered when the path is matched. We say the path matches the URL when it matches some initial portion of the URL. For example, a path of <kbd>/users</kbd> would match both of the following URLs: <kbd>/users</kbd> and <kbd>/users/123</kbd>. If this prop is left out, the component will always render.
  * exact: This is a flag. If it is set, the path will only match when it exactly matches the URL. For example, if we set <kbd>exact</kbd>, then <kbd>/users</kbd> will not match <kbd>/users/123</kbd> any more.
  * render: This optional prop takes a function to be called when the path matches. The return value of the function is returned. Of course, one could also simply define a functional componenet inside the <kbd>component</kbd> prop, but this results in extra, unnecessry work for React, the <kbd>render</kbd> prop is preferred for simple functional components: the difference is that <kbd>component</kbd> causes a new React component to be rendered, while render simply returns jsx directly into the surrounding component. We should only use either the <kbd>component</kbd> prop, or the <bdd>render</bdd> prop. If both are supplied, only the <kbd>component</kbd> prop will be used. 

&nbsp;

Frontend routing and Wildcards: How do we indicate wildcards in the path of Route component?
>Answer: A component's props also, can hold information about a URL's parameters. Wildcards are route segments that get matched by the router, starting at <kbd>:</kbd> up to the next <kbd>/</kbd>, <kbd>?</kbd>, or <kbd>#</kbd>. These matched values are then passed to components via the props and are known as *wildcards*. 

&nbsp;

What is the purpose of all the props that the direct child of a Route component has access to?
>Answer:
  * <kbd>location:</kbd> This is an object that makes the current URL available to us. Its most important key is <kbd>pathname</kbd>, which returns the current URL.
  * <kbd>match:</kbd> This is an object that contains important information about how the current URL matches the route path. Here are some of the more useful keys on the <kbd>match</kbd> object.
    * <kbd>isExact:</kbd> a boolean that tells us whether or not the URL exactly matches the path.
    * <kbd>url:</kbd> the current URL.
    * <kbd>path:</kbd> the route path it matched against (without wildcards filled in)
    * <kbd>params:</kbd> the matches for the individual wildcard segments, nested under their names. 
  * <kbd>history:</kbd> This prop lets us update the URL programatically. For example, suppose we want to push a new URL when the user clicks a button. It has two useful methods:
    * <kbd>push:</kbd> This adds a new URL to end of the history stack. That means that clicking the back button will take the browser to the previous URL. Note that pushing the same URL multiple times in a row will have no effect; the URL will still only show up on the stack once. In development mode, pushing the same URL twice in a row will generate a console warning. This warning is disabled in production mode. 
    * <kbd>replace:</kbd> This replaces the current URL on the history stack, so the back button will not take you to it. 

![alt text](./Images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;6.jpg "History.Replace Example")