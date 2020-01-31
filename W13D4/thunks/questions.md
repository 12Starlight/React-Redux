# Thunk Questions

What does the thunk middleware do?
> Answer: It solves the problem of needing to dispatch a regular action to our store after our asynchronous API call comes back. How does it do this?
> Answer: It does this by creating a thunk action creator that returns a function which gets called with an argument of `dispatch`, thus allowing it to dispatch one or more actions, immediately or later. It also, checks to see if the action is a function or a POJO. 