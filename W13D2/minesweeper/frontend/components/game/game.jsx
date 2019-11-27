import React from 'react';
import * as Minesweeper from '../../../minesweeper';
import Board from '../board/board';
import Tile from '../tile/tile';


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(9, 12),
    }

    this.updateGame = this.updateGame.bind(this);
  }

  // updateGame(field) {
  //   return e => this.setState({
  //     [field]: e.target.value 
  //   });
  // }
  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }
    this.setState({ board: this.state.board })
  }



  render() {
    if (this.state.board.lost()) {
      return(
        <Modal text={ text } />
        // this.state.board = new Board(9, 12)
      ) 
    } 
    return(
      <div>
        <Board board={ this.state.board } updateGame={ this.updateGame } />
      </div>
    )
  }
}


export default Game; 