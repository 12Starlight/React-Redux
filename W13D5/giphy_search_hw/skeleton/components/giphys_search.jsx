import React from 'react';

import GiphysIndex from './giphys_index';
import { render } from 'react-dom';


class GiphysSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'searchTerm': ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  input(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm.split(" ").join("+")) 
  }



  render() {
    const { giphys } = this.props; 

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="search"
              onChange={this.input("searchTerm")}
              type="text"
              value={this.state.searchTerm}
            />
          </label>
          <button>Search</button>
        </form>
        <GiphysIndex 
          giphys={giphys} />
      </div>
    );
  }
}


export default GiphysSearch;







