import React from 'react';
import Amount from './amount';


class ClickCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, previousCounts: [] };
    
    // It is better to bind functions to the constructor, thus changing the 
    // pointer. We are now pointing to the function that has been bound to the
    // scope of this, instead of the function directly. 
    this.click = this.click.bind(this);
    this.reset = this.reset.bind(this);
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
    // are the same names for key and value.
    this.setState({ count: 0, previousCounts })
  }


  render() {
    return(
      <div>
        <button onClick={ this.click }>CLICK ME!!!!</button>
        <span>{ this.state.count }</span>
        <br />
        <button onClick={this.reset }>Reset</button>
        <Amount previousCounts={ this.state.previousCounts }/>
      </div>
    );
  }
}


export default ClickCounter; 