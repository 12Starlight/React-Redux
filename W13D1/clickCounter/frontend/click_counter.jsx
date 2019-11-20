import React from 'react';
import Amount from './amount';


class ClickCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, previousCounts: [] };
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1});
  }

  reset(event) {
    event.preventDefault();
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    // remember { previousCounts: previousCounts } = { previousCounts }
    // this is due to deconstruction, js automatically makes key, when there 
    // are the same names for key and value
    this.setState({ count: 0, previousCounts })
  }


  render() {
    return(
      <div>
        <button onClick={ this.click.bind(this) }>CLICK ME!!!!</button>
        <span>{ this.state.count }</span>
        <br />
        <button onClick={this.reset.bind(this)}>Reset</button>
        <Amount previousCounts={ this.state.previousCounts }/>
      </div>
    );
  }
}


export default ClickCounter; 