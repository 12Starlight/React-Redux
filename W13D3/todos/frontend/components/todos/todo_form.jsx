import React from 'react';
import { uniqueId } from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this is where the local state goes
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }



  render() {

    return(
      <form onSubmit={} >
      
        <input value={} />
      </form>
    )  
  }
}


export default TodoForm; 