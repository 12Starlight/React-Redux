# Giphy Homework

### **Giphy Search**

This homework is going to get us completely familiar with the full `Redux cycle`. We will create a Giphy search tool, by building out a single Redux cycle. A user will enter a search term, then the app will trigger a <kbd>Giphy API</kbd> to render an index of the results. Here is a screenshot of the completed project:

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;9.18.06&#32;AM.jpg "Completed Giphy Project Example")

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

![alt text](Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;9.23.43&#32;AM.jpg "Component Hierarchy Example")

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

![alt text](./Assets/Screen&#32;Shot&#32;2020-02-03&#32;at&#32;10.47.17&#32;AM.jpg "Giphy Create New App Example")

&nbsp;

After submitting the form, you will get to the `dashboard`, and under the <kbd>Your Apps</kbd> section, you should see your newly created app with an API Key that you can use for the rest of this project!


