# **Rainbow Routes**

Today we are going to practice with the `React Router`. The intention of today is to create a simple app that accurately dipicts visually the colors of the rainbow. What is going to make this special is that some colors are nested within other colors. 

### **Phase 0: Setup**

Get started [here](https://open.appacademy.io/learn/swe-online/react/rainbow-routes) and download the skeleton. Get familiar with the files and poke around a bit. By now, it should look very familiar. Then run <kbd>npm install</kbd> to initialize the project. Then run <kbd>npm start</kbd> in order to start <kbd>webpack --watch</kbd>.

Open <kbd>index.html</kbd> in your browser and verify you can see the 'Rainbow Router' header. Currently there are no elements of code working. So, let us get started on that 😉

&nbsp;

### **Phase 1: Setup**

Go ahead and take a look into our <kbd>entry.jsx</kbd>. Keep in mind, our <kbd>Root</kbd> has <kbd>< HashRouter ></kbd> completely wrapped around the <kbd>Rainbow</kbd> component. This ensures that the `router` will be available to any and all descendent React Router components such as <kbd>< Route /></kbd> and <kbd>< Link /></kbd>. There is no need to change the entry file, everything is already done for us. 

Time to open up the file `components/rainbow.jsx`, so we can render some of our components. The goal is to have them look like the following:

![alt text](./images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;1.jpg "Rainbow Routes Example")

&nbsp;

**Only** when we are at the corresponding <kbd>URL</kbd>, <kbd>Red</kbd>, <kbd>Green</kbd>, <kbd>Blue</kbd>, and <kbd>Violet</kbd> components need to render in the <kbd>Rainbow</kbd> component. This can be achieved using <kbd>Route</kbd> components. (If stuck, read [this](https://open.appacademy.io/learn/swe-online/react/intro-to-react-router) for details). Find the <kbd>div</kbd> that has <kbd>id='rainbow'</kbd> inside the <kbd>Rainbow#render</kbd> method, then add the required <kbd>Route</kbd> components. Still stuck, the following example might help.

![alt text](./images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;2.jpg "Red Route Component Example")

&nbsp;

Before moving on, make sure it works by manually typing in each <kbd>URL</kbd> we just created in order to see the component render. These are `React Routes`, so our paths will come after the <kbd>#</kbd>. An example might look like, <kbd>< some-local >/skeleton/index.html#red </kbd>.

Now that we have started, let us nest the <kbd>Orange</kbd> and <kbd>Yellow</kbd> components inside the <kbd>Red</kbd> component, and the <kbd>Indigo</kbd> component inside the <kbd>Blue</kbd> component. This means, that in order for this to work, <kbd>Route</kbd> tags need to be added to `red.jsx` and `blue.jsx` files. We need to use the exact nested path, such as `/red/orange` for the orange <kbd>Route</kbd>.

&nbsp;

### **Phase 2: Links**

So, as you probably noticed, it gets tiresome to manually navigate to our newly created routes. Let us add some functionality to take care of this for us. Link is `React Router`'s solution. 

Go ahead and add links to the paths <kbd>/red</kbd>, <kbd>/green</kbd>, <kbd>/blue</kbd>, and <kbd>/violet</kbd> in the <kbd>Rainbow</kbd> component. An example can be demonstrated as follows:

![alt text](./images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;3.jpg "Link Red Example")

&nbsp;

<kbd>blue</kbd> should have a way to get to <kbd>/blue/indigo</kbd>, then back again. Go and add this <kbd>Link</kbd> along with the <kbd>blue</kbd> component as well:

![alt text](./images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;4.jpg "Link Blue and Blue/Indigo Example")

&nbsp;

Now let us ad the <kbd>Link</kbd>'s to <kbd>/red</kbd>, <kbd>/red/orange</kbd> and <kbd>/red/yellow</kbd> to red. Then test everything to make sure it works. See, is that not easy!

&nbsp;

### **Phase 3: NavLinks**

Okay, so it would be nice to give the user indication of which route they were at via our links. Turns out, `React Router` has a special component for exactly that: <kbd>NavLink</kbd>. NavLinks has an extra <kbd>CSS</kbd> `class` when the <kbd>to</kbd> prop matches the current URL. The default name for this class is called <kbd>active</kbd>.

Let us switch all of our <kbd>Link</kbd>s to <kbd>NavLink</kbd>s. By just opening the app, the change will not become apparent yet. This is due to the fact that we have not added any special styling to the <kbd>active</kbd> class. Open the `application.css` file and find the <kbd>.active</kbd> class. Then add the line <kbd>font-weight: 700</kbd>. Now all our active links are bold, very cool!

However we have run into a problem, our <kbd>Blue only</kbd> link is active at any path that matches it, including <kbd>/blue/indigo</kbd>. This does not make a ton of sense. So, we need to add an <kbd>exact</kbd> flat to that link in order for it to **only** be active when <kbd>to</kbd> **exactly matches** the current path. 

![alt text](./images/Screen&#32;Shot&#32;2020-02-16&#32;at&#32;5.jpg "NavLink Blue Example")

&nbsp;

Make sure to do the same for <kbd>Red only</kbd> link to get everything working correctly.

Compare everything to the solution provided and that the behavior matches 😎🥇