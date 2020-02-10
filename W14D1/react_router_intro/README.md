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

&nbsp;

# **Location Props**

We need the <kbd>id</kbd> from the `URL`, in order to fetch the correct user for our database. As <kbd>props</kbd>, `React Router` passes that information to the profile component. The <kbd>props</kbd> it makes available are as follows:
  * <kbd>location</kbd> This is an object that makes the current URL available to us. It's most important key is <kbd>pathname</kbd>, which returns the current URL.
  * <kbd>match</kbd> This is an object that contains important information about how the current URL matches the route path. Here are some of the more useful keys on the <kbd>match</kbd> object.
    * <kbd>isExact</kbd> a boolean that tells you whether or not the URL exactly matches the path.
    * <kbd>url</kbd> the current URL.
    * <kbd>path</kbd> the route path it matched against (without *wildcards* filled in).
    * <kbd>params</kbd> the matches for the individual wildcard segments, nested under their names. 

  * <kbd>history</kbd> This prop lets you update the URL programatically. For example, suppose we want to push a new URL when the user clicks a button. It has two useful methods:
    * <kbd>push</kbd> this adds a new URL to the end of the history stack. That means that clicking the back button will take the browser to the previous URL. Note that pushing the same URL multiple times in a row will have no effect; the URL will still only show up on the stack **once**. In development mode, pushing the same URL twice in a row will generate a console warning. This warning is disabled in production mode. 
    * <kbd>replace</kbd> This replaces the current URL on the history stack, so the back button will not take you to it. For example:

![alt text](./Images/Screen&#32;Shot&#32;2020-02-10&#32;at&#32;4.jpg "Router Push And Replace Example")

&nbsp;

Let us use the <kbd>match</kbd> prop to fetch the correct user from the database in the <kbd>Profile</kbd> presentational component. Keep in mind, that our <kbd>Profile</kbd> presentational component was rendered at the path `users/:userId`. Thus we would have a <kbd>userId</kbd> param available. 

![alt text](./Images/Screen&#32;Shot&#32;2020-02-10&#32;at&#32;5.jpg "Match And Wildcard Example")

&nbsp;

# **Resources**
  * [React Router docs](https://reacttraining.com/react-router/web/guides/quick-start)
  * [Route](https://reacttraining.com/react-router/web/api/Route)
  * [HashRouter](https://reacttraining.com/react-router/web/api/HashRouter)
  * [location](https://reacttraining.com/react-router/web/api/location)
  * [match](https://reacttraining.com/react-router/web/api/match)
  * [history](https://reacttraining.com/react-router/web/api/history)


