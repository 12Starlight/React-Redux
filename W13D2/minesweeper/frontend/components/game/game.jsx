import React from 'react';
import * as Minesweeper from '../../../minesweeper';
import Board from '../board/board';


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(9, 12),
      text: ''  
    }

    this.updateGame = this.updateGame.bind(this);
  }

  // updateGame(field) {
  //   return e => this.setState({
  //     [field]: e.target.value 
  //   });
  // }
  updateGame() {

  }



  render() {
    return(
      <div>
        <Board board={ this.state.board } updateGame={ this.updateGame } />
      </div>
    )
  }
}


export default Game; 