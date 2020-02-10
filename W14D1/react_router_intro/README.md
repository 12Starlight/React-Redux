# **Intro To React Router**

&nbsp;

### **Summary**

[React Router](https://github.com/ReactTraining/react-router/) is a `React` frontend routing library. Using the browser location, it allows you to controll which components you want to display. This effectively makes the browser <kbd>location</kbd> and <kbd>history</kbd> part of the global state of our application. Said further, we can store information about which <kbd>userProfile</kbd> we are currently viewing, which component should be displayed, or any other piece of state, in the browser <kbd>location</kbd>. This also, gives us the ability to access that information anywhere in our app.

One feature that makes <kbd>location</kbd> different from the `Redux` state is the fact that user can copy and `paste a URL`, and then `email it` to a friend or `save it` or `link to it` from their own website. Suppose we are writing a blog app. If the app tracks which blog post is being displayed using `Redux` state, there is no easy way to go directly to a particular post. Instead a user would have to manually navigate to their page by starting at the `root page`. However, if in the browser <kbd>location</kbd>, we tracked which page was being displayed, then going straight to a given post would be as simple as entering its particular URL. 

We are writing single page apps, so we do not want to have to refresh the page each time we change the browser location. Instead we would want to update the <kbd>location</kbd> and update the application in response to javascript. Since we are using `React`, we will use React Router to do this. To install <kbd>React Router</kbd> in our projects run <kbd>npm install --save react-router-dom</kbd>. Then import <kbd>HashRouter</kbd> from <kbd>react-router-dom</kbd> in your entry file. 

The primary component of the <kbd>router</kbd> is <kbd>HashRouter</kbd> which wraps our `route hierarchy`. Similarly to <kbd>Provider</kbd>, it creates a `React` context that passes information (in this case, routing information) down to all its descendent <kbd>components</kbd>. 

<kbd>React Router</kbd>'s purposes is to allow you to selectively render certain components based on the URL your browser is pointed at. The component you will use the most often is ...

&nbsp;

# 

The <kbd>< Route ></kbd> component, wraps another component, causing that component to only be rendered if a certain URL is matched. The following <kbd>props</kbd> control it. 
  * <kbd>component</kbd> This prop takes a reference to the component to be rendered.
  * <kbd>path</kbd> The wrapped component will only be rendered when the path is matched. We say the path matches the URL when it matches some initial portion of the URL. For example, a path of <kbd>/users</kbd> would match **both** of the following URLs: <kbd>/users</kbd> and <kbd>/users/123</kbd>. If this <kbd>prop</kbd> is left out, the component will always render.
  * <kbd>exact</kbd> This is a flag. If it is set, the path will only match when it exactly matches the URL. For example, if we set <kbd>exact</kbd>, then <kbd>/users</kbd> will not match <kbd>/users/123</kbd> anymore. 
  * <kbd>render</kbd> This optional <kbd>prop</kbd> takes a function to be called when the path matches. The return value of the function is rendered. Of course, one could also simply define a functional component inside the <kbd>component</kbd> prop, but this results in extra, unnecesary work for `React`, so the <kbd>render</kbd> prop is preferred for simple functional components: the difference is that <kbd>component</kbd> causes a new `React` component to be rendered, while render simply returns <kbd>jsx</kbd> directly into the surrounding component. You should use either the <kbd>render</kbd> or <kbd>component</kbd> prop. Only the <kbd>component</kbd> prop will be used, if both are supplied. 

![alt text](./Images/Screen&#32;Shot&#32;2020-02-10&#32;at&#32;1.jpg "Route Paths Example")

&nbsp;

Let us look at a working example.
![alt text](./Images/Screen&#32;Shot&#32;2020-02-10&#32;at&#32;2.jpg "HashRouter And Route Working Example")

&nbsp;

Looking at the following <kbd>Root</kbd> component, the <kbd>header</kbd> gets rendered always, no matter the path being used. The <kdb>Feed</kdb> component gets rendered, only if the path **exactly matches** <kbd>/</kbd>. The <kbd>UserIndex</kbd> component gets rendered, if the path matches <kbd>/users</kbd>.

&nbsp;

# **URL Params**

Information about a `URL parameteres` can also be held in a component's <kbd>props</kbd>. The router will match route segments starting at <kbd>:</kbd> up to the next <kbd>/</kbd>, <kbd>?</kbd>, or <kbd>#</kbd>. Those `matched values` are then passed to **components** via their <kbd>props</kbd>. Such segments are called *wildcards*. 

Suppose we want to use the <kbd>Users</kbd> component to either render the <kbd>UsersIndex</kbd> or the <kbd>ProfilePage</kbd> for a particular user depending on the path. We could do something like this:

![alt text](./Images/Screen&#32;Shot&#32;2020-02-10&#32;at&#32;3.jpg "Route Wildcard Example")

&nbsp;

Notice that we do not need to use <kbd>HashRouter</kbd> again ~ as long as it wraps our <kbd>Root</kbd> file all of our <kbd>Route</kbd> components will be able to connect to it. 

