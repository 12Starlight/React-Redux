# Containers

### **Summary**

As you noticed, there is a ton of code that goes into connecting a component to the store. This can cause conflicts with `abstraction` and the principles of [separation of concerns](https://medium.com/@abhinav_jain123/react-redux-architecture-part-1-separation-of-concerns-812da3b08b46). Thus, it makes sense and is a common Redux pattern to avoid this by separating **presentational components** from their smarter counterparts, called **containers**.

Presentational components are focused on the athestics while container components are concerned with how things work.

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;6.37.15&#32;PM.jpg "Component Differences")

&nbsp;

### **Choosing Containers**

Remember a component does not always need to have access to the store. Containers are only necessary for the 'huge' components in your app that represent sections of a page, and contain smaller purely functional presentational components. These larger container components are how we will map state and dispatch props that get passed down to all their children that are presentational components. 

This what you file tree should looked like:

      components
        + list
          + list_container.jsx
          + list.jsx
          + list_item.jsx

Keep in mind, these containers are in the same exact folder as the presentational components, and that we named our file with _container.jsx at the end. Try to have fewer containers, and utilize them to connect your presentational components to the store. 

As you can see `ListContainer` acts as an interface between the store and the component it wraps, thus we must import `List` and `actions` at the top of the file. 

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;6.51.40&#32;PM.jpg "Container Example")



