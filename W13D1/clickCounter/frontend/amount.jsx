import React from 'react';


// class Amount extends React.Component {
//   constructor(props) {
//     super(props);
//   }


//   render() {
//     return (
//       <ul>
//         { this.props.previousCounts.map(count => (
//           <li>{ count }</li>
//           ))
//         }
//       </ul>
//     );
//   }
// };


// export default Amount; 


// This component does not keep track of any internal state, so it should be a 
// functional component which does not need lifecycle methods 
// const Amount = (props) => {
//   // logic, calculations

//   return (
//     // jsx
//     <div></div>
//   )
// };

// Since we do not need to do any logic or calculations, we can go ahead and
// turn this function into into an implicitly returned function
///  If you ever have a class that just has a render lifecycle method, then 
///  that is a clear indication, you should be using a functional component 

// const Amount = (props) => (
// This can be destructured, and should be done when you define the function
const Amount = ({ previousCounts }) => (
  <ul>
    { 
      // props.previousCounts.map(count => <li>{count}</li>)
      // destructured
      previousCounts.map((count, i) => <li key={i}>{count}</li>)
    }
  </ul>
);


export default Amount;


