import React from 'react';
import StepListContainer from '../step_list/step_list_container';


class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.receiveSteps()
  // }


  render() {
    const { detail, todo } = this.props; 

    if (detail) {
        return (
          <div>
            <StepListContainer todo={todo} />
          </div>
      )
    } else {
      return null; // anytime we want to return nothing, we have to return null
    }
  }
}


export default TodoDetailView; 