import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // this.id is an instance variable similar to @id in ruby
    this.id = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    // If we hide this at some point, useful to not have it running anymore
    clearInterval(this.id); 
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }


  render() {

    return (
      <div className="clock">
        <h1 className="clock_header">Clock Widget</h1>
        <div className="clock_data_wrapper">
          <div className="clock_inner_divs">
            <div className="clock_titles"><span className="clock_title_spans">Date: </span></div>
            <div className="clock_date"><span>{this.state.time.toDateString()}</span></div>
          </div>
          <div className="clock_inner_divs">
            <div className="clock_titles"><span className="clock_title_spans">Time: </span></div>
            <div className="clock_time"><span className="clock_time_span">{ this.state.time.toLocaleTimeString() }</span></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Clock; 