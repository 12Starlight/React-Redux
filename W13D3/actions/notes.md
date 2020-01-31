# Actions

### **Summary**

**Actions** are the only to update state and for view components to trigger changes to the store. They are simply POJOs with a required `type` key and optional payload keys holding new data. These actions get sent via `store.dispatch()` and are paramount in the Redux loop. 

&nbsp;

### **Action Creators**

When an action is dispatched, any new state data must be pased along as the **payload**. Keep in mind, action payloads are generated dynamically. So, we want the ability to customize our changes using functions called, **action creators**. 

These **action creator** functions return simply a `javascript object` that is the actual **action**. In order to initiate a dispatch, you pass the result of calling an action creator to `store.dispatch()`. 

**[Action creators](https://redux.js.org/basics/actions)** allows us to add any item we want, instead of having to define an action object for each fruit. In addition, we want these types inside our actions to be constants, thus being able to quickly catch spelling errors. These bugs could otherwise be very difficult to find.

      export const ADD_FRUIT = 'ADD_FRUIT';
      export const ADD_FRUITS = 'ADD_FRUITS';
      export const SELL_FRUIT = 'SELL_FRUIT';

      export const addFruit = fruit => ({
        type: ADD_FRUIT,
        fruit
      });

      export const addFruits = fruits => ({
        type: ADD_FRUITS,
        fruits
      });

      export const sellFruit = fruit => ({
        type: SELL_FRUIT,
        fruit
      }); 

