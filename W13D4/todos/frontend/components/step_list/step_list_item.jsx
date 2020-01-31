import React from 'react';


class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStep: true  
    }
    this.changeStep = this.changeStep.bind(this);
  }

  changeStep() {
    this.setState({
      showStep: !this.state.showStep
    })
  }


  render() {
    const {step, step: {title, body}, removeStep } = this.props;

    if (this.state.showStep) {
      return (
        <div>
          <ul>
            <li>{title}</li>
            <li>{body}</li>
            <button onClick={this.changeStep}>Hide Step</button>
            <button onClick={ () => removeStep(step.id)}>Remove</button>
          </ul>
        </div>
      ) 
    } else {
      return (
        <button onClick={this.changeStep}>Show Step</button>
      )
    }
  }
}


export default StepListItem; 