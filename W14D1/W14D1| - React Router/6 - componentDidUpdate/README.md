# ComponentDidUpdate() Questions

1. What happens, if we manually just update the URL bar, from <kbd>/4</kbd> to <kbd>/5</kbd>? How do we use componentDidUpdate?
>Answer: It is important to keep in mind, that the <kbd>componentDidMount()</kbd> is what actually fetches the bleat. However, bc the component has already mounted, this action never gets called **even though** the bleatId was updated bc it was fetched from the <kbd>router</kbd>, and then <kbd>mapStateToProps</kbd> and <kbd>mapDispatchToProps</kbd> were re-rendered bc the <kbd>props</kbd> actually changed. So, we need to use <kbd>componentDidUpdate()</kbd> to fetch the bleat using a conditional. We use the conditional bc we only want to re-render the page **when** the prop <kbd>bleatId</kbd> changes.   

preProps.match.params.bleatId:
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;1.jpg "PreviousProps Example")

componentDidUpdate():
![alt text](./bleater/app/assets/images/Screen&#32;Shot&#32;2020-02-17&#32;at&#32;2.jpg "ComponentDidUpdate PreviousProps Example")