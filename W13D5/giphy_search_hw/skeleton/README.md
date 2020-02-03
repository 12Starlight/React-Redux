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