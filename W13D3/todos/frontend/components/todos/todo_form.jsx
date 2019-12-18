import React from 'react';
import { uniqueId } from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this is where the local state goes
      id: uniqueId(), // assigns a unique id to the property `id`
      title: '',
      body: '',
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
    this.setState({ title: '', body: ''}) // resets the local state after submit
    // this.state.id = uniqueId(); 
    this.props.receiveTodo(this.state); // must pass in an object
  }



  render() {

    return(
      <form onSubmit={ this.handleSubmit }>
        <label>Title
          <input onChange={ this.update('title') } value={ this.state.title } />
        </label>
        <label>body
          <input onChange={ this.update('body') } value={ this.state.body } />
        </label>
        <button >Create Todo</button>
      </form>
    )  
  }
}


export default TodoForm; 