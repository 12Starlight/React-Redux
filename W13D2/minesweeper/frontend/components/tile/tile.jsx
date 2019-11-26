import React from 'react';


const Tile = ({ updateGame, tile }) => {
  let tileText = '';
  let className = 'hidden'; 
  if (tile.explored) {
    className='revealed'; tile.explored = true; tileText = tile.adjacentBombCount(); 
  } else if (tile.bombed) {
    className='bombed'; tile.bombed = true; tileText = "💣";
  } else if (tile.flagged) {
    className='flagged'; tile.flagged = true; tileText = "🚩";
  } else {
    tileText; className='hidden'; 
  }

  
  return(
    <div className={ className } >
      { tileText }
    </div>
  ) 
}


export default Tile;