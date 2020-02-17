# **Frontend Routes With Rails**

1. Difference(s) between our frontend routes and backend routes?
>Answer: <kbd>Rails Routes</kbd> will be any routes that come before the <kbd>#</kbd>, whereas <kbd>React Routes</kbd> will be any routes that come **after**. The <kbd>HashRouter</kbd> is what will be providing the routes **after** the <kbd>#</kbd>. The backend routes come from our `routes.rb` file. 

&nbsp;

2. What is our StaticPages Controller doing?
>Answer: It handles our <kbd>root</kbd> path, that handles the back end view rendered from <kbd>root.html.erb</kbd> that all of our `React Routes` will be based off of. This will be done using a main <kbd>id='content'</kbd> that our `React` will hook into this root element with <kbd>id='content'</kbd>. 

&nbsp;

3. React often requires us to do a 'hard-reload,' how is this accomplished?
>Answer: <kbd>cmd + shft + r</kbd>

&nbsp;

1. What happens when two Route components have similar paths? How can we avoid route collisions?
>Answer: Both <kbd>component</kbd>s end up getting displayed. The way to avoid this is to write <kbd>exact path='something/somewhere'</kbd>

&nbsp;

5. Turbolinks? how can we remove them?
>Answer: Turbolinks is a rails helper function that tries to make sure our html is rendered faster by trying to do a lot of the same things HashRouter does. It clashes with our <kbd>HashRouter</kbd>. So, we have to get rid of it in `application.html.erb` <kbd>data-turbolinks-track: true</kbd>. Then in `app/assets/javascripts/application.js`, we want to remove the sprocket <kbd>//= require turbolinks</kbd>. Make sure to go to our Gemfile and remove the gem as wel.  

&nbsp;

application.html.erb:

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;1.jpg "Application.HTML.ERB Turbolinks Example")

application.js: 

![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;2.jpg "APP/ASSETS/JAVASCRIPTS/Aplication Turbolinks Example")