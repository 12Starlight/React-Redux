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

        <p>
          <div>Click to explore tile.</div>
          <div>Alt + click to flag a tile.</div>
        </p>

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