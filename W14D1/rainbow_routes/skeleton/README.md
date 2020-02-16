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