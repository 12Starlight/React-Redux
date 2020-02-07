import React from 'react';

import GiphysIndexItem from './giphys_index_item';


const GiphysIndex = ({giphys}) => {
  let allGiphys = giphys.map((giphy) => {
    return <GiphysIndexItem key={giphy.id} giphy={giphy} />
  });

  return(
    <div>
      { allGiphys }    
    </div>
  )
};


export default GiphysIndex; 



