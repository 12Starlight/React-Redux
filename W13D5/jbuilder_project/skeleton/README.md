# **Jbuilder Exercises**

### **Summary**

Alright we are getting to the end! 😂 Now it is time to start restructuring how we want to receive our data from the back end **for** our front end. To start, download this [skeleton](https://open.appacademy.io/learn/swe-online/react/jbuilder). Run <kbd>bundle install</kbd>, then <kbd>bundle exec rails db:setup</kbd>. To get the right test results to run our database setup, run <kbd>bundle exec rails db:seed RAILS_ENV=test --trace</kbd>.

Once you are set up, run the specs using <kbd>bundle exec rspec spec</kbd>. We are using these tests in order to test whether our `API` is sending the correct information. This will be accomplished by writing some Jbuilde templates.

So, now let us set up our routes. We defined all of our controllers under the <kbd>API</kbd> namespace (`make sure to look through the controllers, and focus on the class name`), so this needs to be specified in our routes as well. Today to keep things a little more simple, we will only be testing <kbd>:show</kbd> and <kbd>:index</kbd>. 

Start with gifts, then nest the <kbd>:index</kbd> route under the guests resource. Use the below example to format your answer.

![alt text](./app/assets/images/setup/Screen&#32;Shot&#32;2020-02-14&#32;at&#32;1.jpg "API Namespace Example")

&nbsp;

Run <kbd>rails routes</kbd> and make sure you are getting the result you want. I may be useful to keep the [Jbuilder docs](https://github.com/rails/jbuilder) for reference as you work through this. Some things to keep in mind:
  * First, we can run any ruby code we want in a Jbuilder template, including conditionals. This ends up being really helpful when, for example, we only want to send certain user data, if the user requesting it is logged in.
  * Second, we can build Jbuilder partials as we id with `HTML and ERB` and render them using <kbd>json.partial!</kbd> in our templates.
  * Third, we can nest our data by opening blocks for a given key in our object. For example,

![alt text](./app/assets/images/setup/Screen&#32;Shot&#32;2020-02-15&#32;at&#32;2.jpg "Jbuilder Block Example")

&nbsp;

As you can see, this is a nested object that uses associations <kbd>@message.creator</kbd> and view helpers <kbd>url_for</kbd>. So, that we have gotten our little toes wet. Let us dive in deep!

Go ahead and make our first template <kbd>show.json.jbuilder</kbd> view for our guest resource. Use <kbd>json.extract!</kbd> to include the <kbd>guest</kbd>'s `name`, `age`, and `favorite_color`. Make sure you do not include <kbd>created_at</kbd> or <kbd>updated_at</kbd>. Run the spec and test your result by visiting `api/guests/1`. Also, make sure that you have a `JSON` [formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) installed via chrome.

Now that you have it working, let us now go and create an <kbd>:index</kbd> view. For this, use <kbd>json.array!</kbd> and pass <kbd>@guests</kbd>. Keep in mind that a block is a good way to specify what you want rendered for each guest. However, switch it up a little and **do not** use <kbd>json.extract!</kbd> --instead specify each component individually. For example:

![alt text](./app/assets/images/setup/Screen&#32;Shot&#32;2020-02-15&#32;at&#32;3.jpg "JSON Specific Block Example")

&nbsp;

Both methods well help you get better familiar with `Jbuilder`. Let us though, refactor the two `templates` of <kbd>single guest details</kbd>into a partial due to them doing similar things. Convention is to name our partial in the same way as we would for <HTML> views, e.g. <kbd>_guest.json.jbuilder</kbd>. Make sure that 'api/' is in our partial path.  

Okay, now that we have the ball rollling, let us add some more <kbd>associated</kbd> data. We want the <kbd>gifts</kbd> for individual <kbd>guests</kbd>, but not when we are looking at all guests (that is just too much data for eyes lol). In our <kbd>:show</kbd> view, render guest's gifts. Only include the title and description. Using <kbd>json.array!</kbd> at the top level, will break **other** <kbd>guest</kbd> `information`. So, we want to make sure that our data is nested by passing it as an argument to <kbd>json.gifts</kbd>.

Time to take the training wheels off. Let us make a `gift` <kbd>:show</kbd> and `guest` `gift` <kbd>:index</kbd> views. Then make sure the specs pass.

Aright, now let us move onto `parties` and build <kbd>:index</kbd> and <kbd>:show</kbd>. For index, show all parties with all of their guests. In the show view, include not just the guests, but all of the guest's gifts as well. 

During our project, we will experience some insane [N + 1 Queries](https://open.appacademy.io/learn/swe-online/react/n-plus-one). Are we calling <kbd>.gifts</kbd> for every guest in the `parties` <kbd>:show</kbd> view? That is an **extra query** for every **guest**! Do not worry, we can fix this 😍 using our `Active Record` skills. Let us go ahead and use <kbd>.includes</kbd> which pre-fetches whatever data we tell it. For example, in the <kbd>PartiesController#index</kbd>, we could call <kbd>.includes(guests:[:gifts])</kbd>; then, when we call <kbd>.gifts</kbd> on each guest in our `Jbuilder` template, we will use that pre-fetched data and do not actually have to keep hitting the database!

Now is the real test! Let us see, if we can find any other <kbd>N + 1 Queries</kbd> that we made throughout the project and then, defeat them. **Idea**: look at your <kbd>rails s</kbd> logs and notice when there are **multiple** queries. 

![alt text](./app/assets/images/setup/Screen&#32;Shot&#32;2020-02-15&#32;at&#32;4.jpg "Multiple Query Calls Example")

&nbsp;

Wow! Do you see all those <kbd>gift</kbd> loads? These are all <kbd>N + 1 Queries</kbd> that unnecessarily accompany our **1** query for the <kbd>party</kbd> and **1** query for the <kbd>guests</kbd>. After we fix it, we get efficient calls.

![alt text](./app/assets/images/setup/Screen&#32;Shot&#32;2020-02-15&#32;at&#32;5.jpg "Efficient Query Calls Example")    

&nbsp;

### **Bonus**

