# **Window API**

### **Summary**

The Browswer Object Model (BOM) allows JavaScript to effectively 'communicate' with a browswer. This is achieved by giving access to the `window`. The `window` is just a POJO (Plain Old JavaScript Object), meaning it has keys that point to functions and properties that point to values. This being said, you can assign new key-value pairs onto the `window`! This `window` object is available in all browswers. 

&nbsp;

### **How to Use the Window Object**

In Chrome Dev Tools, type `window` in the console to interact with the `window` global object. You will immediately see a lists of keys available. This `window` is what is used as the global context each time your browser runs. This also applies for any JavaScript code that is run the console as well. For this reaons, it is not necessary to type the word `window` into the console, once it is in the context of the `window`. 

&nbsp;

### **Using the Window to Improve User Experience**

Accessing the window as a dev, gives us a ton of power over how we want our user's experience to be. We could set the browser height of the current window, create a popup alert, even scroll to the top or bottom of the user's page. Using the [window](https://developer.mozilla.org/en-US/docs/Web/API/Window "List of Window Properties") in the right way, allows us to improve a user's experience on your website. 