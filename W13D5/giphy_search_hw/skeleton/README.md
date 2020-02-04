# Giphy Homework

### **Giphy Search**

This homework is going to get us completely familiar with the full `Redux cycle`. We will create a Giphy search tool, by building out a single Redux cycle. A user will enter a search term, then the app will trigger a <kbd>Giphy API</kbd> to render an index of the results. Here is a screenshot of the completed project:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;1.jpg "Completed Giphy Project Example")

&nbsp;

### **Phase 0: Setup**

Make sure to download the [skeleton](https://open.appacademy.io/learn/swe-online/react/giphy-homework) in order to get familiar with the file structure.
  * Look inside all the front-end folders
  * Check out <kbd>webpack.config.js</kbd> and <kdb>package.json</kdb>
  * Find the entry file <kbd>giphy_search.jsx</kbd>
  * Run <kbd>npm install</kbd> and <kbd>npm start</kbd> to start <kbd>webpack --watch --mode=development</kbd>

&nbsp;

### **Component Overview**

Now that you have seen how the files are layed out, let us go over the hierarchy of the components:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;2.jpg "Component Hierarchy Example")

  * <kbd>Root</kbd>: As usual, it is responsible for connecting our component tree with the => <kbd>store</kbd>. It renders the => <kbd>GiphysSearchContainer</kbd>.
  * <kbd>GiphysSearchContainer</kbd>: **Container** for our <kbd>GiphysSearch</kbd> component.
  * <kbd>GiphysSearch</kbd>: renders the `search bar` and handles all of the *search logic* (keeping track of the query and triggering the AJAX request on submit); renders the => <kbd>GiphysIndex</kbd>.
  * <kbd>GiphysIndex</kbd>: iterates over the <kbd>giphys</kbd> in <kdb>props</kdb>, rendering a <kbd>GiphysIndexItem</kbd> for each one.  

&nbsp;

### **Phase 1: Redux Cycle**

&nbsp;

### **State Shape**

We want to keep in mind first how we want to `think` about the state shape before we build our project. We want to display the giphy results returned by our AJAX request. So, it makes sense to create slices of state that represent <kbd>giphys</kbd> which hold a collection of <kbd>giphy</kbd> objects.

      the state shape will be here
      {
        giphys: [
          // notice **here** it is an array []
          // inside this array are {}, {}, {}, {}, {} giphy objects
        ]
      }

&nbsp;

**Giphy API Key**

To get started, go ahead and create your `Giphy API Key` that we will use in our API requests to Giphy.

Navigate to the [Giphy API Quick Start Guide](https://developers.giphy.com/docs/api/#quick-start-guide) and click <kbd>Create an App</kbd>. Make sure to create a giphy account. 

Once you have completed this, fill out the form for creating a new app, and only check the option for <kbd>I only want to use the GIPHY API</kbd>. 

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;3.jpg "Giphy Create New App Example")

&nbsp;

After submitting the form, you will get to the `dashboard`, and under the <kbd>Your Apps</kbd> section, you should see your newly created app with an API Key that you can use for the rest of this project!

&nbsp;

**API Util**

Okay, now it is time to write a function <kbd>fetchSearchGiphys</kbd> in `api_util.js` to make an AJAX call to the Giphy API. It will have a single argument, the <kbd>searchTerm</kbd> entered by a user. Look at the [Giphy API docs](https://github.com/Giphy/GiphyAPI) for more details, but in short, we want to make a <GET> request to <kbd>http://api.giphy.com/v1/gifs/search?q=${search + term}&api_key=${YOUR_GIPHY_API_KEY}&limit=2</kbd>.
  * Search term is replaced with our `'actual query'`
  * actual [documentation](https://developers.giphy.com/docs/api/endpoint#search) does **not** include `http://`, so MAKE SURE TO INCLUDE IT and the actual API request does **NOT** have <kbd>${}</kbd> in it! So, take out ${} and just put your inputs instead. 
  * the api request must be a **string**

&nbsp;

We tag <kbd>limit=2</kbd> onto the end of our query params to tell Giphy we only want **two GIF's back**. The giphy API is relatively slow, so keeping the response size down helps our app be a little faster. 

For the best practice, let us test small pieces as we move along. Let us test out that AJAX request to make sure it is doing the right thing we intended. 

Make sure to run your webpack scirpt, <kbd>webpack -w</kbd>. Check to make sure our bundle.js file is getting updated. It has already been sourced for you in <kbd>index.html</kbd>.

Now, open the <kbd>index.html</kbd> file in the browser. The jQuery <kbd>script</kbd> tag has already been added, so <kbd>$.ajax</kbd> will be defined. Import <kbd>fetchSearchGiphys</kbd> to the entry file, then go ahead and put it on the window so we have access to it in the console. Then run the following code:

Code:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;9.jpg "API Code Example")

Code:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;4.jpg "FetchSearchGiphys Test Example")

Browser:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;5.jpg "FetchSearchGiphys Browser Example")

&nbsp;

This will make the AJAX request, which also returns a `promise`. We chain on a <kbd>then</kbd> to log the response data, once the response comes back. In our array, there should be two objects <kbd>(2) [{...}, {...}]</kbd>. These are our giphys! Do not move on until you can successfully get back an array of two objects. Then remove <kbd>fetchSearchGiphys</kbd> from the window once you are done testing. 

&nbsp;

**Actions** 

Let us now, set up an action to properly receive giphys. Do not forget to export constants for our `action types` that point at strings of the same content:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;6.jpg "Constant Example")

&nbsp;

Write and export <kbd>receiveSearchGiphys</kbd>, a function that receives <kbd>giphys</kbd> and returns an action object. This is our `Regular Action Creator`. The object should have a key for <kbd>type</kbd> and another for the <kbd>giphys</kbd> actual data. Your function should look like the following:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;7.jpg "Regular Action Creator Example")

&nbsp;

Now to make this work, we need a reducer!

&nbsp;

**giphysReducer**

Define <kbd>giphysReducer</kbd> in `giphys_reducer.js` to receive the previous state and an action. Recall that a reducer **describes how that state should change** based on a <kbd>dispatched action</kbd>. We NEVER want to mutate the previous state, and instead want to return the **new state**. Alas, if the action does not change the state, we want the reducer to return `oldState`. Do not forget to import the <kbd>RECEIVE_SEARCH_GIPHYS</kbd> constant from our actions file. 

The following is what your reducer should look like:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;8.jpg "Giphys Reducer Example")

&nbsp;

**rootReducer**

Recall earlier when we looked at state shape. The <kbd>giphysReducer</kbd> above should control the <kbd>giphys</kbd> slice of the application. We use a <kbd>rootReducer</kbd> with Redux's <kbd>combineReducers</kbd> function in order to give control to each reducer that manages their slice of state. This then, gets combined and becomes the `application state`.

Given the simplicity of this project, we only need one reducer. However, it is good practice to still use <kbd>combineReducers</kbd>, so that in the future we can easily add other slices of state. 

Now go ahead and import <kbd>combineReducers</kbd> and <kbd>giphysReducer</kbd>. Then make your rootReducer. It should resemble the following:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;10.jpg "Simple Root Reducer Example")

&nbsp;

**Store** 

In order to test our reducer we need create our store which holds our <kbd>global state</kbd>. In Redux, remember that <kbd>createStore</kbd> receives <kbd>reducer</kbd>, optional <kbd>preloadedState</kbd>, and an optional <kbd>enhancer</kbd>. We will begin by writing a <kbd>configureStore</kbd> function that passes our <kbd>rootReducer</kbd> as the reducer `argument` to <kbd>createStore</kbd>.

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;11.jpg "ConfigureStore Example")

&nbsp;

Once we have everything built, we want to make sure to include it in our entry file. So, make sure to import <kbd>configureStore</kbd>.

Then include it inside the <kbd>DOMContentLoaded</kbd> callback. After this is all done and our store is ready to go, it is time to test the `reducer` and `action creator`!
  * put the store on the window as <kbd>window.store = store</kbd>.
  * import the <kbd>fetchSearchGiphys</kbd> API and the <kbd>receiveSearchGiphys</kbd> action creator, then add them to the window as well.
  

Code:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;13.jpg "Store Example")

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;14.jpg "Adding Store And ReceiveSearchGiphys To Window Example")

&nbsp;
  
Use the following code to test your logic before moving on.

Code:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;12.jpg "Testing Store In Console Code Example")

Browswer:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;15.jpg "Testing Store With ReceiveSearchGiphys And FetchSearchGiphys Example")

&nbsp;

Notice the test above directly makes the `API call` and uses a promise to include the <kbd>receiveSearchGiphys</kbd> action creator. Using this pattern in our components would make our app difficult to maintain -- each change to app state **should come from an action creator**.

&nbsp;

### **Thunk Middleware**

Now that we have a better idea of how everything works, let us now refactor it a little bit. We want to fetch giphys using a `Thunk Action Creator`. Remember that thunk action creators return a function, that when called with an argument of dispatch, can dispatch **additional** actions. 

This `Thunk Action Creator` should dispatch <kbd>receiveSearchGiphys</kbd> after the Giphy API call is successful.
  * Import our API functions into `actions/giphy_actions.js` as <kbd>import * as APIUtil from '../util/api_util';</kbd>
  * Export a function <kbd>fetchSearchGiphys</kbd> that 
    * Receives a search term
    * Returns a function that can be called with <kdb>dispatch</kdb> and uses a promise to dispatch <kdb>receiveSearchGiphys</kdb> with the received data after <kbd>APIUtil.fetchSearchGiphys</kbd> is successful. 

&nbsp;

Your `Thunk Action Creator` should look like the following:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;16.jpg "Thunk Action Creator Example")

&nbsp;

Next we want to refactor our <kbd>configureStore</kbd> function in `store/store.js` to incorporate your `Thunk Action Creator`. Redux provides <kbd>thunk</kbd> middleware from the <kbd>redux-thunk</kbd> module. We will import Redux's <kbd>thunk</kbd> middleware and <kbd>applyMiddleware</kbd> function.

Make sure that following is now included in `store/store.js`:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;17.jpg "Updating Store To Include Thunk And ApplyMiddleware Example")

&nbsp;

And **WALLLAa** this is it : D This concludes the entire Redux cycle. Go ahead and test everything now! Import <kbd>fetchSearchGiphys</kbd> from your actions file to your entry and put it on the window. Then try the following code in the browswer and make sure everything is working properly before moving on:

Code:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;18.jpg "Thunk Action Creator Code Example")

Browser:
![alt text](./Assets/Screen&#32;Shot&#32;2020-02-04&#32;at&#32;19.jpg "Testing Thunk Action Creator On Console Example")

&nbsp;

### **Phase 2: React Components**

