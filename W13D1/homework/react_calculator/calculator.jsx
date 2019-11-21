import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };

    // bind functions to scope of this
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this); 
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  // Create event handler methods
  setNum1(e) {
    this.setState({
      num1: e.currentTarget.value
    });
  }

  setNum2(e) {
    this.setState({
     num2: e.currentTarget.value
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clear(e) {
    e.preventDefault();
    this.setState({
      result: 0,
      num1: '',
      num2: ''
    });
  }

  add(e) {
    e.preventDefault();
    this.setState({
      // parseInt(val, radix) base number (radix) is 10
      result: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10)
    });
  }

  subtract(e) {
    e.preventDefault();
    this.setState({
      result: parseInt(this.state.num1) - parseInt(this.state.num2)
    });
  }

  multiply(e) {
    e.preventDefault();
    this.setState({
      result: parseInt(this.state.num1) * parseInt(this.state.num2)
    });
  }
  
  divide(e) {
    e.preventDefault();
    this.setState({
      result: parseInt(this.state.num1) / parseInt(this.state.num2)
    });
  }



  render() {

    return (
      <div>
        {/* interpolate result */}
        <h1>{this.state.result}</h1>
        <input onChange={ this.setNum1 } value={ this.state.num1 } />
        <input onChange={ this.setNum2 } value={ this.state.num2 } />
        <button onClick={ this.clear } onSubmit={ this.update('result') }>Clear</button>
        <br />
        <button onClick={ this.add } onSubmit={ this.update('result') }>Add +</button>
        <button onClick={ this.subtract } onSubmit={ this.update('result') }>Subtract -</button>
        <button onClick={ this.multiply } onSubmit={ this.update('result') }>Multiply *</button>
        <button onClick={ this.divide } onSubmit={ this.update('result') } >Divide /</button>
      </div>
    );
  }
}


export default Calculator; 