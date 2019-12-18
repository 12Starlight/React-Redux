import React from 'react';
import { uniqueId } from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this is where the local state goes
      id: '',
      title: '',
      body: '',
      done: false 
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    // e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit() {
    return this.props.receiveTodo(this.state.todos);
  }



  render() {

    return(
      <form >
        <input onChange={ this.update } value={ this.state.body } />
        <button onSubmit={ this.handleSubmit } >Create Todo</button>
      </form>
    )  
  }
}


export default TodoForm; 