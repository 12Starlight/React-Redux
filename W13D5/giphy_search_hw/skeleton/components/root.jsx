// Import React Redux
import React from 'react';
import { Provider } from 'react-redux';

// Import Components
import GiphysSearchContainer from './giphys_search_container';


// Build Root Component
const Root = ({store}) => {
  // store gets passed in as an argument to Provider 
  return (
    <Provider store={store}>
      <GiphysSearchContainer />
    </Provider>
  )
};


export default Root;






