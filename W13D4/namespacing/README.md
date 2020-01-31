# Namespacing

### **Summary** 

Nesting our `API endpoints` under a <kbd>namespace</kbd>, is better than relying on a Rails content-type routing to delineate what type of HTTP responses our web app generates. 

A **namespace** is just a subset of controllers that live under a specific URL

This can be explained by first creating a new controller: `rails g controller api/cats`, which is going be be in the file `app/controllers/api/cats_controller.rb`. Then we must tell our router about the new controller:

![alt text](./Screen&#32;Shot&#32;2020-01-16&#32;at&#32;6.35.58&#32;PM.jpg "Namespace Example")

&nbsp;

Finally, we have to store our `index.json.jbuilder` view in the location `app/views/api/cats/index.json.jbuilder` so our new `Api:CatsController` can find it. Now we can access our api endpoint on `localhost:3000/api/cats`. 