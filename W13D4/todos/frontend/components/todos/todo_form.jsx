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
    this.state.id = uniqueId(); // assigns a unique id to the property `id`
    // this.props.receiveTodo(this.state); // must pass in an object // updated to persist data from the backend to the front end
    this.props.createTodo(this.state).then(
      () => this.setState({ title: '', body: '', done: false })
    ).then(() => this.props.clearErrors()); 
  }
  

  render() {
    const { errors } = this.props; 

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input onChange={this.update("title")} value={this.state.title} />
        </label>
        <label>
          body
          <input onChange={this.update("body")} value={this.state.body} />
        </label>
        <button>Create Todo</button>
        <div>{errors}</div>
      </form>
    );  
  }
}


export default TodoForm; 







