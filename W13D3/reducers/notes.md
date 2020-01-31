# Reducers 

### **Summary**

Looking at the [Redux Store](https://open.appacademy.io/learn/swe-online/react/store) reading, the `store` has a **reducer** function for updating its `state` that:
  * gets the most updated state and an `action`
  * looks at `action.type` to determine, if state needs to be changed
  * returns the new state

&nbsp;

![alt text](./Screen&#32;Shot&#32;2019-12-04&#32;at&#32;7.15.44&#32;PM.jpg)

When the store initializes, it calls its reducer with an `undefined state`, giving the reducer the power to determine state based on the default `state` value.

The majority of the reducer function is used to issue updates of that slice of state. 
  1. The reducer decides which logic needs to be executed based on `action.type` using a `switch` operator. 
  2. It designs and returns a new object that symbolizes the next state (after the action is processed), if any data needs to be updated. 
  3. The `state` is returned unchanged, if a case does not match the `action.type` due to the reducer not caring about that action. 

&nbsp;

As you can see, intial state is set to a default value of a blank array []. The reducer then returns a new array with `action.fruit` added to the previous `state`, if `action.type` is `ADD_FRUIT`. If it is not, the reducer returns the state unchanged.

&nbsp;

### **Immutable State**

Inside a Redux reducer, `state` and `action` can **never** be mutated. Your reducer **[must](https://redux.js.org/faq/immutable-data)** return a new object, if the state changes. One way to ensure that state is not accidently mutated is to use `Object.freeze()`.

![alt text](./Screen&#32;Shot&#32;2019-12-04&#32;at&#32;7.47.01&#32;PM.jpg)

&nbsp;

### **Combining Reducers**

Once our state grows so big, we need to think about managing slices of that state in order to keep things looking clean and to have some standarization. Each category within the overal state, is a slice of state. 

      {
        farmers: {
          '1': {
            id: 1,
            name: 'Ol McDonald'
            paid: false,
          },
          '2': {
            id: 2,
            name: 'Rabbit'
            paid: true
          }
        },
        fruits: [
          'orange',
          'orange',
          'apple',
          'lychee',
          'grapefruit'
        ]
      }

The store now has to process new action types like `HIRE_FARMER` and `PAY_FARMER`, thus updating the `farmers` slice of state. Adding more cases to our original reducer will just clutter it up. Instead, we need to make another reducer to manage this new slice of state. 

Having multiple reducers, each handling their own [slice](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure#basic-state-shape) of state is called **reducer composition**, that is the cornerstone of Redux applications. As such, each reducer's params `state` only represents that slice of the state it manages and the `actions` corresponds to it. 

After standardizing our store state by having each reducer manaage only it's slice of state that it's responsible for, we need to update `combineReducers()` from the Redux package, to reflect this. We do this by mapping state keys to the reducers that handle each slice of state. Giving `combineReducers()` a single object that returns a single `reducer`, we can use to create our store. 

&nbsp;

### **Delegating to Reducers**

Another part of this equation to keep in mind is `delegation`. That is, we want certain reducers to delegate to subordinate reducers. Looking at the farmer example, we might modify `farmers` to delegate to a single `farmer` reducer as each farmer needs to be updated (i.e received payment). 

![alt text](./Screen&#32;Shot&#32;2019-12-05&#32;at&#32;11.14.19&#32;AM.jpg)