import React from 'react'


class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    }

    this.searchField = this.searchField.bind(this);
  }

  searchField(e) {
    this.setState({
      inputVal: e.currentTarget.value
    });
  }


  render() {
    const { names } = this.props;
    // console.log(this.state.inputVal); 
    const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(this.state.inputVal.toLowerCase());
    });
    // console.log(filteredNames); 

    const namesLis = filteredNames.map((name, i) => {
      return <li key={i}>{name}</li>
    })

    return (
      <div>
        <ul>
          <input onChange={ this.searchField } />
          { namesLis }
        </ul>
      </div>
    )
  }
}


export default Autocomplete; 