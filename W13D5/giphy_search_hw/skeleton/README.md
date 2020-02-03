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
  * actual [documentation](https://developers.giphy.com/docs/api/endpoint#search) does **not** include `http://` and the actual API request does **NOT** have <kbd>${}</kbd> in it! So, take those out and just put your inputs instead. 
  * the api request must be a **string**

&nbsp;

We tag <kbd>limit=2</kbd> onto the end of our query params to tell Giphy we only want **two GIF's back**. The giphy API is relatively slow, so keeping the response size down helps our app be a little faster. 

For the best practice, let us test small pieces as we move along. Let us test out that AJAX request to make sure it is doing the right thing we intended. 

Make sure <kbd>webpack -w</kbd>. Check to make sure our bundle.js file is getting updated. It has already been sourced for you in <kbd>index.html</kbd>.

Now, open the <kbd>index.html</kbd> file in the browser. The jQuery <kbd>script</kbd> tag has already been added, so <kbd>$.ajax</kbd> will be defined. Import <kbd>fetchSearchGiphys</kbd> to the entry file, then go ahead and put it on the window so we have access to it in the console. Then run the following code:

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

