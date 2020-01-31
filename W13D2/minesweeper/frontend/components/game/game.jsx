import React from 'react';
import * as Minesweeper from '../../../minesweeper';
import Board from '../board/board';
import Modal from '../modal/modal';


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(9, 12)
    }

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }
    this.setState({ board: this.state.board })
  }

  restartGame() {
    this.setState({
      board: new Minesweeper.Board(9, 12)
    });
  }



  render() {
    // debugger 
    if (this.state.board.lost() || this.state.board.won()) {
      return(
        <div>
          <Board board={this.state.board} updateGame={this.updateGame} />
          <Modal board={this.state.board} restartGame={this.restartGame} />
        </div>
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