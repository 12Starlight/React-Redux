import React from 'react';


class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    return this.props.updateGame(this.props.tile, e.altKey);
  }


  
  render() {  
    const { tile } = this.props;

    let tileText = '';
    let className = 'hidden'; 
    if (tile.explored && !tile.bombed) {
      className='revealed'; tileText = tile.adjacentBombCount(); 
    } else if (tile.bombed && tile.explored) {
      className='bombed'; tileText = "💣";
    } else if (tile.flagged) {
      className='flagged'; tileText = "🚩";
    } else {
      tileText; className='hidden'; 
    }

    
    return(
      <div className={ className } onClick={ this.handleClick }>
        { tileText }
      </div>
    )
  } 
}


export default Tile;