# **Route Wildcard Props**

1. How can we add a wildcard to a front end route?
>Answer: You add the <kbd>:wildcard</kbd> to the front of the prop <kbd>path</kbd>, after the <kbd>/</kbd> inside the `React` component.

&nbsp;

2. Where can we look to see the values from our front end route params?
>Answer: These can be found in <kbd>this.props</kbd> under the following `keys`: <kbd>history</kbd>, <kbd>location</kbd> and <kbd>match</kbd> to name the most important ones. To find params specifically we would want to use <kbd>this.props.match</kbd>.

![alt text](./images/Screen&#32;Shot&#32;2020-02-12&#32;at&#32;1.jpg "This.props Values For Front End Route Example") 

<kbd>this.props.match.params</kbd> &nbsp;
<kbd>:something points => /whatever</kbd> 

`{ something: whatever }`

![alt text](./images/Screen&#32;Shot&#32;2020-02-12&#32;at&#32;2.jpg "This.props.match.params.something Example")


