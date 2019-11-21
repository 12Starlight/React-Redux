import React from 'react';


class Dog extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // this.props are then accessible in a component's instance methods 
    return(
      <div>
        Name: { this.props.name }, Breed: { this.props.breed }
      </div>
    );
  }
}


export default Dog; 