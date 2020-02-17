# **< Link > Questions**

What is the purpose of the Link component and what functionality does it replace?
>Answer: It is a way to simplify navigation around our app. It replaces <kbd>history.push</kbd>.

&nbsp;

How is the Link component used?
>Answer: We <kbd>import { Link } from 'react-router-dom</kbd> to use it. It can be used with <kbd>to='/somewhere'</kbd> and a custom <kbd>onClick(e)</kbd> handler. 

![alt text](./images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;6.jpg "OnClick Handler For NavLink Example")

&nbsp;

What is the purpose of a NavLink component and how does it differ from the Link component?
>Answer: It works just like the Link component, just with extra functionality to add extra stying with when the path it links to matches the current path.

&nbsp;

What is the default activeClassName prop of NavLink?
>Answer: It is a CSS clas name for syling a Link when its route is active. A Link will be active, if its <kbd>to</kbd> props path matches the current URL.

&nbsp;

What is the default activeStyle prop of NavLink?
>Answer: This is a react style object that will be applied inline to the Link, when its <kbd>to</kbd> prop matches the current URL.

