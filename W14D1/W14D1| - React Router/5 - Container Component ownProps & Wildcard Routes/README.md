# **Container Component <kbd>ownProps</kbd> & Wildcard Routes**

1. What are ownProps?
>Answer: All of the props that are given to the <kbd>Route</kbd> component, are given also to the <kbd>container</kbd> `component` via <kbd>(state, ownProps)</kbd> and <kbd>(dispatch, ownProps)</kbd> which also get passed to the <kbd>presentational</kbd> `component`.

&nbsp;

2. How do we use ownProps to get a wildcard?
>Answer: We use <kbd>ownProps.match.params.somethingId</kbd> which gives us the route <kbd>:wildcard</kbd> at the end of our <kbd>path='somewhere/:wildcard'</kbd> inside our <kbd>Route</kbd> component we want to render. (i.e. <kbd>localhost:3000/#/bleats/1</kbd>)

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;1.jpg "OwnProps Example")

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;2.jpg "Component Rendered Using OwnProps Example") 

&nbsp;

1. How would we get the author of a bleat?
>Answer: Here <kbd>bleat</kbd> is the bleat that is directly in the state. We do not want to modify it directly though. So, we would use <kbd>Object.assign({}, bleat, { author: 'points to something' }</kbd>, using our <kbd>foreign key property</kbd> on <kbd>Users</kbd>

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;3.jpg "Creating Author Example")  

&nbsp;

1. If a client wanted to go directly to the route <kbd>localhost:3000/#/bleats/1</kbd>, instead of of first going to <kbd>:index</kbd>, **then** <kbd>:show</kbd>, how would we do that?
>Answer: 

1). &nbsp; In the show <kbd>container</kbd> componenet, we would want to create a conditional that checked whether the bleat exists or not. Then we would create the `api_util` <kbd>fetchBleat(id)</kbd>. Afterword, we create the <kbd>constant</kbd>, <kbd>Regular Action Creator</kbd> (we use the same `Regular Action Creator` for fetchBleats() and just handle the logic in the <kbd>:show</kbd> BleatController action), and `Thunk Action Creator` <kbd>fetchBleat(id)</kbd>. 

2). &nbsp; Now, it is time to create our <kbd>routes</kbd>, add our <kbd>:show</kbd> to our BleatsController putting our `bleat` inside of an array, render our JSON object, build the `object` rendered using <kbd>Jbuilder</kbd>, and making sure our <kbd>Regular Action Creator</kbd> is returning the one `bleat`. Our <kbd>bleatsReducer</kbd> will make sure using <kbd>Object.assign({}, state, newBleats)</kbd> .

3). &nbsp; It is time to create a key <kbd>fetchBleat:</kbd> inside of <kbd>mapDispatchToProps</kbd>. Make sure to use <kbd>ownProps</kbd> to create <kbd>const bleatId = ownProps.match.params.bleatId</kbd>. Our <kbd>fetchBleat: (bleatId) => dispatch(fetchBleat(bleatId)</kbd>, can be passed as a prop to the <kbd>BleatShow</kbd> presentational component. Create a conditional that renders a message for when a bleat has not become available yet. Then in the presentational componenet, inside the <kbd>componentDidMount()</kbd>, we would call <kbd>this.props.fetchBleat(state.author.bleat_id)</kbd>. And now, breath 😉

&nbsp;

1.)

Conditional Checking Whether Bleat Exists: 
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;4.jpg "Conditional Checking Whether Bleat Exists Example")

ApiUtil fetchBleat(id):
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;5.jpg "ApiUtil FetchBleat(id) Example")

Re-using RECEIVE_BLEAT_AND_AUTHORS:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;6.jpg "Receive Bleat Constant Example")

Re-using receiveBleats Regular Action Creator:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;7.jpg "Receive Bleat Regular Action Creator Example")

Show Controller Action Logic:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;8.jpg "Show Controller Action Logic Example")

Thunk Action Creator:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;9.jpg "Thunk Action Creator")

2).

Adding Show To Routes:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;10.jpg "Routes Example")

Jbuilder JSON Response Example:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;11.jpg "JBuilder JSON Response Example")

Bleats Reducer Example:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;12.jpg "Bleats Reducer Example")

3).

Creating Key <kbd>fetchBleat:</kbd> BleatShowContainer mapDispatchToProps: 
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;13.jpg "BleatShowContainer MapDispatchToProps Example")

Putting <kbd>this.props.fetchBleat()</kbd> in ComponentDidMount():
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;14.jpg "BleatShow Presentational ComponentDidMount() Example")











