# Normalized State


1. Why can we use the same `action.type` in two different reducers?
>Answer: So, that the reducer handles the slice of state appropritate to that `action` which is the POJO object that our `Regular Action Creator` returns, and <kbd>type:</kbd> which is a property on that POJO. Our reducer recognizes that <kbd>type:</kbd> property which will have a different value each time, depending on what slice of state we want to manipulate, delete, or change. This <kbd>action.type</kbd>, represents our `listener` which our reducer will use in it's switch statement that then, will use the POJO <kbd>payload: value</kbd>. This represents a property on the data object returned from our AJAX request, based on how we formatted our JSON view page. This <kbd>key</kbd> (payload.key) is then used to update the `store state`.   

&nbsp;

1. What does 'normalized state' mean?
>Answer: Instead of the data object being nested in a complicated format. We seperate the slices of state which have <kbd>main keys</kbd> that are 'bleats' (slice of state) with a `bleat` key of <kbd>id:</kbd> that points to a key with the **same** <kbd>id:</kbd> that represents that slice of state. Then for other main keys it has a property with an array of refrences to the other `key id's`. 

Code:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;1.jpg "Normalized State Example")

Browser:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;2.jpg "Browswer JSON Response In Normalized State Example")

&nbsp;

Now remember that bc it is <kbd>N + 1</kbd>, we want to change our `controller action` to use **includes** in order to **cache** our first query.

Code:
![alt text](./Screen&#32;Shot&#32;2020-02-08&#32;at&#32;3.jpg "Includes In Controller Example")