// Import React Redux
import React from 'react';
import { Provider } from 'react-redux'


const Root = ({store}) => ( // gets passed down from Parent or calling component  
  <Provider store={ store }>
    <h1>This Is Where App Goes 🤗🤗</h1>
  </Provider>
);


export default Root; 









