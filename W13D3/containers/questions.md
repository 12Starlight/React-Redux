# Container Questions

What is a container component?
> Answer: It acts as an interface that connects the presentational component to the `store`. It only is concerned with how things work by maping `state` to props and dispatching Redux `actions` to props, and not with how things look. 

&nbsp;

What is a presentational component?
> Answer: It is the component that is concerned with the asthetics and gets all its data from the `store state` and invokes callbacks via `props` from the container component.

&nbsp;

What are the differences between them?
> Answer: Container components are concerned with how store `state` and dispatch `actions` get into the presentational componeent. They wrap the presentational component. The presentational componeent is only concerned with the asthetics and gets all its data from the `store` or invokes callback functions via `props`. 