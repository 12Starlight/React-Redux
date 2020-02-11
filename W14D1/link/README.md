# **< Link >**

&nbsp;

### **Summary**

One way to simplify navigation around our application is to use <kbd>< Link ></kbd>. It looks at a route defined in our app's router and issues an <kbd>on-click</kbd> navigation event to that route. <kbd>Link</kbd> is preferred to <kbd>history.push</kbd> inside the <kbd>onClick</kbd> of an element bc link will still **render an anchor tag** with a correctly set <kbd>href</kbd> attribute. This makes it easier for screen readers which leads to more semantic html. 

In order to take advantage of it <kbd>import { Link } from 'react-router-dom'</kbd>.

<kbd>< Link ></kbd> can take a number of different props.
  * <kbd>to</kbd>: A route location description that can point to an absolute path, e.g. <kbd>/about</kbd>

![alt text](./images/Screen&#32;Shot&#32;2020-02-11&#32;at&#32;1.jpg "To='' Example")

  * <kbd>onClick(e)</kbd>: A custom click event handler. Can call <kbd>e.preventDefault</kbd> and <kbd>e.stopPropagation</kbd> like any other click handler.

![alt text](./images/Screen&#32;Shot&#32;2020-02-11&#32;at&#32;2.jpg "onClick={} Example")

&nbsp;

#

The <kbd>< NavLink ></kbd> works just like a <kbd>< Link ></kbd>, but with a little extra functionaility. The main feature is it has the ability to add extra styling when the path it links to matches the current path. For a <kbd>Navbar</kbd>, it makes the ideal choice, hence the name 😉 Three <kbd>props</kbd> control the styling. 
  * <kbd>activeClassName</kbd>: A CSS class name for styling a <kb>< Link ></kb> when its route is active. A <kbd>< Link ></kbd> is active when it has a <kbd>to</kbd> prop path that is the same as the current URL.

![alt text](./images/Screen&#32;Shot&#32;2020-02-11&#32;at&#32;3.jpg "NavLink Prop ActiveClassName Example")