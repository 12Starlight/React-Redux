// Import React Redux
import React from 'react';
import { Provider } from 'react-redux'
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container'


const Root = ({store}) => ( // gets passed down from Parent or calling component  
  <Provider store={ store }>
    <h1>This Is Where App Goes 🤗🤗</h1>
    <PokemonIndexContainer />
  </Provider>
);


export default Root; 









