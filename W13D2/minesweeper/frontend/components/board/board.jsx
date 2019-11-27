import React from 'react';
import Tile from '../tile/tile';


class Board extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { board, updateGame } = this.props; 

    return (
      <div className="board">
        <h1>Minesweeper</h1>

        <div>
          <p>Click to explore tile.</p>
          <p>Alt + click to flag a tile.</p>
        </div>

        &nbsp;

        {board.grid.map((row, idx_1) => {
          return (
            <div className="row" key={idx_1}>
              {row.map((tile, idx_2) => {
                return <Tile key={idx_2} tile={tile} updateGame={updateGame} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}


export default Board; 