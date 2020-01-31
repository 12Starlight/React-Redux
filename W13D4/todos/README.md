# Todos Part 2

## <kbd>Phase 1: Rails API</kbd>

&nbsp;

### **Summary**

Rails has migrated over to 6.0, so make sure to follow [these instructions](https://open.appacademy.io/learn/swe-online/rails/rails-setup) for properly setting up a rails project. 

Then add the following gems to your Gemfile under development:
  * gem `'pry-rails'`
  * gem `'binding_of_caller'`
  * gem `'better_errors'`
  * gem `'annotate'`

Then add the following gems as main gems:
  * gem `'jquery-rails'`
  * gem `'bcrycpt'` (uncomment) 

Afterwords go ahead and add the following <kbd>Sprockets</kbd> to application.js above //= require tree.
  * //= require jquery
  * //= require jquery_ujs

Once these have completed, run <kbd>bundle install</kbd>

&nbsp;

### **Todos**

First create a migration for Todo using <kbd>rails g migration CreateTodos</kbd> making sure to add <kbd>todo.rb</kbd> under app/models. Also, remember to make your createTodo<kbd>s</kbd> plural. 

Migration:

![alt text](./app/assets/images/Todos/Screen&#32;Shot&#32;2020-01-22&#32;at&#32;6.48.41&#32;PM.jpg "Todos Migration Example")

Model:

![alt text](app/assets/images/Todos/Screen&#32;Shot&#32;2020-01-22&#32;at&#32;6.38.15&#32;PM.jpg "Todos Model Example")

&nbsp;

Then run <kbd>bundle exec rails db:create</kbd> and <kbd>bundle exec rails db:migrate</kbd>. Afterwords, test everyting by creating a few todos for your database using the `Rails console` <kbd>rails c</kbd>. 

&nbsp;

### **Testing Your Setup**

Remember that your Todo migration is just an object with properties. So, when you are in the Rails console, it is important that you keep this in mind to create a new Todo. 

We are using <kbd>ActiveRecord</kbd> to do the heavy lifting instead of `postgresql` or `SQL`. This allows us to retrieve and add data without having to write raw sql. In that sense, <kbd>ActiveRecord</kbd> is an `ORM` or Object Relational Mapper, which means we do not have to call the database ourself manually, ActiveRecord does it for us! 

Code:

![alt text](./app/assets/images/Todos/Screen&#32;Shot&#32;2020-01-22&#32;at&#32;7.40.27&#32;PM.jpg "Example of creating a Todo")

&nbsp;

### **Create API Controller**

Okay, so when creating your Api::TodoController it is important to keep in mind that each <kbd>action</kbd> is manipulating your migration object with properties. Data from your tables are converted to objects via <kbd>ActiveRecord</kbd>. So, actions can also pull individual objects using a `wildcard` identifier or **ALL** your objects at once. 

Your actions typically will follow a <kbd>REST</kbd> formula that consist of the following: A <kbd>Prefix</kbd>, <kbd>Verb</kbd>, <kbd>URI Pattern</kbd>, <kbd>Controller</kbd>, and it's <kbd>Action</kbd>. These routes can be found using the following command in your terminal <kbd>rails routes</kbd>. A break down is given below:

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.12.37&#32;AM.jpg "Routes Examples")

&nbsp;

First you want to create an <kbd>api/todos_controller</kbd> using the following command <kbd>rails g controller Api::Todos</kbd>. Once you have done this, make sure to create actions, keeping in mind the logic we discussed above. 

Code:

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.19.50&#32;AM.jpg "Api::TodosController Example")

&nbsp;

Now that we have our controller we want to create our routes in `config/routes.rb` and list them under <kbd>namespace :api, defaults: { format: :json }</kbd>, then nest our routes using a `do` block. Also, make sure to create a `root` path for your `static_pages_controller` in that same file <kbd>root to: 'static_pages#root'</kbd>

Code:

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.31.24&#32;AM.jpg "Routes Example")

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.35.03&#32;AM.jpg "StaticPagesController Example")

&nbsp;

Next, we want to create a new folder in <kbd>views</kbd> called <kbd>static_pages</kbd>. Then create the file for our `root` path.

Code:

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.44.10&#32;AM.jpg "Root Path Example")

&nbsp;

### **Testing Our Api::TodosController**

Using our <kbd>JQuery</kbd> `gem` that we installed earlier in our <kbd>Gemfile</kbd>, we now have access to <kbd>$.ajax</kbd> requests. Create AJAX requests that <kbd>POST</kbd>, <kbd>GET</kbd>, <kbd>PATCH</kbd>, and <kbd>DELETE</kbd> todos in the console. 

Code: 

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.50.13&#32;AM.jpg "Testing Api::TodosController Using AJAX Requests Example")

&nbsp;

Notice something very particular here. In our <kbd>create</kbd> and <kbd>update</kbd> actions using <kbd>POST</kbd> and <kbd>PATCH</kbd> methods, we have a <kbd>data:</kbd> `key`. It is important when using a private helper method for `parameters` that we wrap that data key value in another `object` with a key of <kbd>todo:</kbd>. That is because our private helper method <kbd>params.require(:todo)</kbd> is looking for something named todo to be present, or else it will error out!

Code:

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.57.42&#32;AM.jpg "Wraping Data In Another Object With A Todo Key Example")

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;12.59.13&#32;AM.jpg "Private Helper Method Example")

&nbsp;

Last but, not least, make sure that you are runing the rails server using <kbd>rails s</kbd> and checking for any errors comming from the back end by looking at your `terminal` below.

![alt text](./app/assets/images/Api_TodosController/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;1.02.59&#32;AM.jpg "Rails Server Terminal Example")

&nbsp;

## <kbd>Phase 2: Putting It All Together 😉</kbd>

&nbsp;

### **Summary**

Woooo we got a back end working! Now, it is time to take our <kbd>frontend</kbd> folder, <kbd>package.json</kbd>, and <kbd>webpack.config.js</kbd> files from **Todos Part 1** and add them to our rails project on the root level i.e. the same level as `app`, `bin`, `config`, etc.

First, we will modify our <kbd>path:</kbd> in our <kbd>webpack.config.js</kbd> to create bundle in `app/assets/javascripts` rather than the root directory <kbd>path: path.resolve(__dirname, 'app', 'assets', 'javascripts')</kbd>. 

Code:

![alt text](./app/assets/images/Phase2_summary/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;1.57.53&#32;AM.jpg "Webpack Changes Example")

&nbsp;

Next, we will go ahead and add <kbd>"postinstall": webpack</kbd> to our <kbd>scripts:</kbd> in `package.json`.

Code:

![alt text](./app/assets/images/Phase2_summary/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;2.03.07&#32;AM.jpg "Package.json Changes Example")

&nbsp;

Finally, we want to make sure that our <kbd>div</kbd> holding <kbd>id='content'</kbd> is added to our `body` in our <kbd>application.html.erb</kbd> file, due to us **not** using an index.html file anymore!

Code:

![alt text](./app/assets/images/Phase2_summary/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;2.05.57&#32;AM.jpg "Application.html.erb Changes Example")

&nbsp;

Then to make sure everything is working properly run <kbd>npm install</kbd> to update our <kbd>package-lock.json</kbd> file, and then run <kbd>npm run webpack</kbd>. Afterwords open up <kbd>localhost:3000</kbd> and make sure there are no errors. Then celebrate 🎉💃🕺!!!!

Browser:

![alt text](./app/assets/images/Phase2_summary/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;2.35.00&#32;AM.jpg "Localhost:3000 Example")

&nbsp;

Now, let us **EXPAND** our `Redux` loop to include the *entire* internet! That is, make requests to our rails app and bring back todos from the database as <kbd>objects</kbd> that we can manipulate. In order to do this, we will use <kbd>APIUtil</kbd> and <kbd>action creators</kbd>. 

&nbsp;

### **API Utils**

Our API utilities are what actually make the <kbd>$.ajax</kbd> requests that will hit the backend and fetch data from our `tables`. These utility functions should also, return a <kbd>promise</kbd>. This is so, that the caller of the function can handle success and failure as they see fit.

First, we want to write our `Todo API Util`.
  * Create a file <kbd>util/todo_api_util.js</kbd>
  * Write a function without arguments that makes an <kbd>$.ajax</kbd> request to <kbd>api/todos</kbd> using the `method` <kbd>GET</kbd>, and returns a <kbd>promise</kbd>. 
  * Store this function in <kbd>const fetchTodos</kbd> and make sure to export it.
  * Add this function to the window to use in the `console`.

Code:

![alt text](./app/assets/images/Api_Util/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;3.06.40&#32;AM.jpg "Api Util Function Example")

![alt text](./app/assets/images/Api_Util/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;3.08.00&#32;AM.jpg "Attaching Api Util Funciton To Window Example")

&nbsp;

Next, we want to test our code in the console by running the `fetchTodos()` function. Then resolve the <kbd>promise</kbd> by passing in **another** function to <kbd>then</kbd>.

Console:

![alt text](./app/assets/images/Api_Util/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;3.12.06&#32;AM.jpg "Testing fetchTodos() On Window And Resolving Promise By Passing In Another Function To Then Example")

&nbsp;

### **Thunk Middleware**

We must create middleware to handle <kbd>thunk action creators</kbd>. This is done by making a file `frontend/middleware/thunk.js`. Next, import the middleware you created along with <kbd>applyMiddleware</kbd> inside `store.js`. Make sure to pass three argements into <kbd>createStore</kbd> and pass <kbd>applyMiddleware(thunk)</kbd> as your third argument. 

Code: 

![alt text](./app/assets/images/Thunk_Middleware/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;5.18.06&#32;PM.jpg "Thunk Middleware Example")

&nbsp;

As you can see, we can also import <kbd>thunk</kbd> directly from <kbd>'redux-thunk'</kbd> by issuing the command <kbd>npm install redux-thunk</kbd>. 

![alt text](./app/assets/images/Thunk_Middleware/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;5.19.10&#32;PM.jpg "Passing In ApplyMiddleware(thunk) As Third Argument Example")

&nbsp;

Aferwords, test everything by dispatching a function in the `console`. If the the following function gets called, it is working!

      store.dispatch((dispatch)) => {
        console.log('If this prints out, the thunk middleware is working!')
      });

Browser:

![alt text](./app/assets/images/Thunk_Middleware/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;5.26.48&#32;PM.jpg "Testing Thunk In Console Example")

&nbsp;

If you are seeing any errors at this point, make sure that you are invoking <kbd>configureStore()</kbd> in `todo_redux.jsx`. This is so that the inner function <kbd>createStore()</kbd> gets called.

![alt text](./app/assets/images/Thunk_Middleware/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;5.29.54&#32;PM.jpg "Invoking ConfigureStore() Example")

&nbsp;

### **Thunk Action Creators**

&nbsp; 

**Fetching Todos**

Okay, now it is time to `fetch todos` from the <kbd>server</kbd>! Create the file `frontend/actions/todo_actions`, then import <kbd>*</kbd> from our <kbd>ApiUtil</kbd> and export the function <kbd>fetchTodos</kbd> which returns another function. The returned function will take <kbd>dispatch</kbd> as an `argument`. When dispatch is invoked, it will call <kbd>ApiUtil.fetchTodos</kbd> to fetch all of our todos. Make sure to resolve the promise by dispatching our synchronous `regular action creator` <kbd>receiveTodos()</kbd>.

**NB: In order to have as much flexibility as possible, go ahead and return the resolved promise from the action creator. This is so that we can chain calls to <kbd>then</kbd> as many times as we deem necessary, in the event we wanted to dispatch more actions from that component.**

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.09.06&#32;PM.jpg "Thunk Action Creator Example")

&nbsp;

**Testing Our Thunk Action Creator**

To test our `Thunk Action Creator` in the console, make sure to first add it to the window and **remove** the <kbd>import { fetchTodos } from './util/todo_api_util'</kbd>. Then run the following in the console. 

    store.dispatch(fetchTodos())

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.22.17&#32;PM.jpg "Adding Thunk Action Creator To Window Example")

&nbsp;

It should persist the data to the front end component we built earlier using `React Redux`.

Browser Before: 

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.17.55&#32;PM.jpg "Browser Before Example")

&nbsp;

Browser After:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.19.41&#32;PM.jpg "Browser After Data From The Backend Persists To The Front End Using React Redux Example")

&nbsp;

Next, after we have everything working, let us go ahead and add <kbd>fetchTodos</kbd> inside `todo_list_container.js` to <kbd>mapDispatchToProps</kbd>. Make sure to import it from <kbd>'../../actions/todo_actions'</kbd>. Then call it using <kbd>props</kbd> in the file `todo_list.jsx`, inside the <kbd>componentDidMount()</kbd> lifecycle method. Make sure to test it by refreshing the browser and seeing the `backend data` automatically persist to the front end via React Redux.

Code: 

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.30.08&#32;PM.jpg "Adding FetchTodos To MapDispatchToProps Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.33.12&#32;PM.jpg "Calling FetchTodos Inside ComponentDidMount Example")

Browser:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-24&#32;at&#32;7.36.12&#32;PM.jpg "Using ComponentDidMount To FetchTodos Example")

&nbsp;

**Creating Todos**

Now that we have an app that can fetch todos, let us add the ability to save todos to the <kbd>database</kbd>. Remember, our controllers, models, associations and tables all query and manipulate the data. So, in order to utilize `Active Record` again, we need to tap into <kbd>ApiUtil</kbd> which takes a `todo object` and <kbd>POST</kbd>'s it to the server via an `HTTP` request.

Inside `frontend/actions/todo_actions`, add a new thunk action creator <kbd>createTodo</kbd>, which takes a `todo object` as an argument. The function that gets returned, once invoked, should call the <kbd>ApiUtil</kbd> to create the `todo object` and resovlve the promise by dispatching our synchronous <kbd>receiveTodo(todo)</kbd> action. 

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.38.19&#32;PM.jpg "jQuery AJAX Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.33.24&#32;PM.jpg "Todo Regular Action and Thunk Action Creators Example")

&nbsp;

Now we want to use everything! Inside the <kbd>todo_list_container</kbd>, in <kbd>mapDispatchToProps</kbd>, pass in <kbd>createTodo</kbd> and pass it to <kbd>TodoForm</kbd>. Go ahead and leave <kbd>receiveTodo</kbd> where it is for the time being (the <kbd>todoListItem</kbd> presentational component still will depend on it!). 

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.46.00&#32;PM.jpg "Todo List Container And Passing CreateTodo To MapDispatchToProps Example")

&nbsp;

In order to pass <kbd>createTodo</kbd> to <kbd>TodoForm</kbd>, we have to `change` TodoList from a functional component to a `class` component.

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.48.36&#32;PM.jpg "Changing TodoList To Class Component  Example")

&nbsp;

To tie everything in a bow, let us now call <kbd>createTodo</kbd> **instead** of receiveTodo inside the <kbd>TodoForm</kbd>. Now it is important that we clear the form only AFTER the promise resolves. Since our `thunk middleware` returns the promise back to the caller, we can take on another <kbd>.then</kbd> to clear the form like so:

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.53.38&#32;PM.jpg "TodoForm And HandleSubmit Clearing Form After Promise Is Resolved Example")

&nbsp;

Alright, we are almost done. Now let us test it!

Browser Before:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;3.59.50&#32;PM.jpg "Before CreateTodo Example")

Browser After:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;4.01.52&#32;PM.jpg "Typing Input /Hitting Submit CreateTodo Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-27&#32;at&#32;4.03.48&#32;PM.jpg "Hitting Submit CreatTodo Example")

&nbsp;

### **Error Handling**

Unfortunately our request might fail. In the likely case that happens and we create a todo with invalid params, the server will then render a JSON array of errors. It is important that your contoller's <kbd>create</kbd> action does **not** have <kbd>save!</kbd> or else it will not hit your <kbd>else</kbd> statment. So, check that first before moving on! Your controller should look like the following:

Code:
![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;9.35.55&#32;PM.jpg "Todo Controller Save Example")

&nbsp;

We need a place to store these errors. Time for a new reducer! Create `frontend/reducers/error_reducer`. Start out with an initial state that is an empty array. Then write actions that will modify this portion of state.
  * Create `frontend/actions/error_actions`. We only need two sync actions here, <kbd>receiveErrors(errors)</kbd> and <kbd>clearErrors</kbd>.
  * Create the necessary constants for each action, <kbd>RECEIVE_ERRORS</kbd> and <kbd>CLEAR_ERRORS</kbd>.
  * Back in your reducer, handle these actions by either returning <kbd>action.errors</kbd>, or an empty array. 

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;9.35.55&#32;PM.jpg "Error Actions Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.16.10&#32;PM.jpg "ErrorReducer Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.18.21&#32;PM.jpg "RootReducer Example")

&nbsp;

Now that we have a place for our errors to be stored, when todo creation fails, dispatch those errors. This needs to be done by updating our <kbd>createTodo</kbd> action like this:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.28.05&#32;PM.jpg "Updating Thunk Action Creators Example")

&nbsp;

Finally it is time to test everything by making sure our `error state` is populated, if you try to create a todo with invalid params. Then, inside your <kbd>TodoForm</kbd> component, display the errors. You will need to pass the <kbd>errors</kbd> through <kbd>mapStateToProps</kbd> of the top level component. Make sure to clear the errors when the todo is successfully created! 

Code:

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.39.16&#32;PM.jpg "MapDispatchToProps Errors Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.41.15&#32;PM.jpg "TodoList Passing In Errors Example")

![alt text](./app/assets/images/Thunk_Action_Creators/Screen&#32;Shot&#32;2020-01-28&#32;at&#32;10.36.32&#32;PM.jpg "TodoForm Example")

&nbsp;

**Updating Todos**

**Note:** It is important that we finished Phase 5 from Todos Part 1. (Updating and Deleting Todos) We need the actions and logic in our reducers before preceeding. 

Just like what we did above in <kbd>createTodo</kbd>, (the resulting regular action creator will still be <kbd>receiveTodo</kbd>) we are going to create update and delete todo. However, we need a different action bc we will hit a different route on the back end. 

Add <kbd>ApiUtil.updateTodo(todo)</kbd> and a new thunk action creator <kbd>updateTodo(todo)</kbd> which dispatches <kbd>receiveTodo</kbd> upon success and <kbd>receiveError</kbd> when it fails. Update our `statusChange(e)` helper method in <kbd>TodoListItem</kbd> in order to use our new action instead of calling <kbd>receiveTodo directly</kbd>.

Once you got that up and running, remove <kbd>receiveTodo</kbd> from `todo_list_container` bc we do not need this anymore. 

Code:

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;5.43.44&#32;PM.jpg "Api Util UpdateTodo Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;5.45.15&#32;PM.jpg "Thunk Action Creator UpdateTodo Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;5.47.03&#32;PM.jpg "Adding UpdateTodo To TodoListContainer's MapDispatchToProps Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;5.52.33&#32;PM.jpg "Adding UpdateTodo To StatusChange(e) In TodoListItem Example")

&nbsp;

Now that we have the code, it is time to test our <kbd>updateTodo</kbd> `Thunk Action Creator`. We could create a whole new edit component, but for now download `PostMan` and run the desktop app. Make sure to add <kbd>skip_before_action :verify_authenticity_token</kbd> to `application_contorller.rb`, then delete after testing. Once in, use the url to identify a todo that we want to update, then put in that <kbd>wildcard</kbd> in the url, set it to <kbd>PATCH</kbd> and fill out the appropriate key value fields. 

PostMan Before Send:

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.03.14&#32;PM.jpg "PostMan Before Send")

&nbsp;

PostMan After Send:

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.00.33&#32;PM.jpg "PostMan After Send")

&nbsp;

**Deleting Todos**

You know the drill 😉 Make your <kbd>ApiUtil</kbd> function, and `Thunk Action Creator` <kbd>deleteTodo</kbd> that dispatches <kbd>removeTodo</kbd> on it's success. Then update your components to use the new action!

Code:

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.10.05&#32;PM.jpg "Api Util DeleteTodo Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.13.02&#32;PM.jpg "Thunk Action Creator DeleteTodo Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.14.27&#32;PM.jpg "Adding DeleteTodo To MapDispatchToProps In TodoListContainer Example")

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.15.48&#32;PM.jpg "Changing The Render OnClick To DeleteTodo In TodoListItem Example")

&nbsp;

Browser:

![alt text](./app/assets/images/Updating_Deleting_Todos/Screen&#32;Shot&#32;2020-01-29&#32;at&#32;6.17.20&#32;PM.jpg "Testing DeleteTodo In Console Example")

&nbsp;

### **Phase 3: Steps**
