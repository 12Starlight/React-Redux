import React from 'react';


class WordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ''
    };
    this.updateWord = this.updateWord.bind(this);
  }

  // updateWord(event) {
  //   this.setState({ word: event.currentTarget.value });
  //   console.log(this.state.word);
  // }

  // REWRITTEN to actually reflect the new state change immediately
  updateWord(event) {
    this.setState({ word: event.currentTarget.value }, () => {
      console.log(this.state.word);
    });
  }


  render() {
    return(
      <div>
        <input onChange={ this.updateWord } value={ this.state.word } />
        <span>The word is: { this.state.word }</span>
      </div>
    )
  }
}


export default WordInput; 