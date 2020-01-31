import React from 'react';
import { uniqueId } from '../../util/unique_id';


class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this is where the local state goes
      id: '',
      title: '',
      body: '',
      todoId: '',
      done: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState(
      { [field]: e.currentTarget.value }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ title: '', body: '' }) // resets the local state after submit
    this.state.todoId = this.props.todoId; // get from container 
    this.state.id = uniqueId();
    this.props.receiveStep(this.state) // get from container and pass in local state to be added to steps
  }


  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Title 
            <input onChange={ this.update('title') } value={ this.state.title } />
          </label>

          <label>Body
            <input onChange={ this.update('body') } value={ this.state.body } />          
          </label>
          <button>Create Step</button>
        </form> 
      </div>
    )
  }
}


export default StepForm; 