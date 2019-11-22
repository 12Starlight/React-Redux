import React from 'react'


class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      names: []
    }

    this.searchField = this.searchField.bind(this); 
  }

  searchField() {
    return e => this.setState({
      inputVal: e.currentTarget.value 
    });
  }

  
  render() {
    const { names, inputVal } = this.props; 
    const nameLis = names.filter(name => {
      name.fname.toLowerCase().includes(inputVal.toLowerCase())
    });

    return(
      <div>
        <ul>
          <input onChange={ this.searchField } />
          <div>{ nameLis }</div>
        </ul>
      </div>
    )
  }
}


export default Autocomplete; 

