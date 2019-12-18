// Props
// app.jsx
import Dog from './dog';


const App = () => <Dog name='Fido' breed='Greyhound' ></Dog>;


// Presentational component
// dog.jsx
class Dog extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        Name: { this.props.name }, Breed: { this.props.breed }
      </div>
    );
  }
}


export default Dog; 


// Example of Setting State
class WordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ''
    };

    this.updateWord = this.updateWord.bind(this);
  }

  updateWord(e) {
    this.setState(
      { word: e.currentTarget.value }
    );
  }


  render() {
    return(
      <div>
        <input onChange={ this.updateWord } value={ this.state.word } />
        <span>The word is: { this.state.word }</span>
      </div>
    );
  }
}


// Refactored updateWord(e)
updateWord(e) {
  this.setState(
    { word: e.currentTarget.value }, () => {
      console.log(this.state.word);
    }
  );
}