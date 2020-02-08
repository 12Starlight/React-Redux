# Normalized State


1. Why can we use the same `action.type` in two different reducers?
>Answer:  

&nbsp;

2. What does 'normalized state' mean?
>Answer: Instead of the data object being nested in a complicated format. We seperate the slices of state which have <kbd>main keys</kbd> that are 'bleats' (slice of state) with a `bleat` key of <kbd>id:</kbd> that points to a key with the **same** <kbd>id:</kbd> that represents that slice of state. Then for other main keys it has a property with an array of refrences to the other `key id's`. 

Code:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;1.jpg "Normalized State Example")

Browser:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;2.jpg "Browswer JSON Response In Normalized State Example")

&nbsp;

Now remember that bc it is <kbd>N + 1</kbd> we want to change our `controller action` to use **includes** in order to **cache** our first query.

Code:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;3.jpg "Includes In Controller Example")