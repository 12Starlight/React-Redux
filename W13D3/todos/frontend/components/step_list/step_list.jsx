import React from 'react'
import StepListItemContainer from './step_list_item_container';
import StepFormContainer from './step_form_container';


class StepList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: '',
    //   todoId: '',
    //   done: false
    // }
  }


  render() {
    const { todo, steps, todoId } = this.props; 

    let allSteps = steps.map((step) => { // remember steps is a fuction
      return(
        <StepListItemContainer 
          key={step.id}
          todo={todo}
          todoId={todoId}
          step={step}
        />
      )
    })

    return(
      <div>
        <ul>
          {allSteps}
        </ul>      
          
        <StepFormContainer todoId={todoId} />
      </div>
    )
  }
}


export default StepList; 