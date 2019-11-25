// An ES6 class extends React.Component
// Allows the most functionality, state lifecycle methods
// components before ES6 used React.createClass()
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // this method is called after the component is rendered onto the DOM 
    // and fetches items from the API to be rendered as a list
      $.ajax({
        url: '/items',
        success: itmes => this.setState({ items });
      });
  }


  render() {
    return(
      <h1>{ this.props.title }</h1>
      <ul>
        {
          this.state.items.maap(item => (<li>{ item }</li>))
        }
      </ul>
    );
  }
}


// Purly Functional Components, (no state and needs 0 lifecycle methods)
// accepts props as a parameter 
// acts as the component's render method
// most common type of component in Redux applications 
// NOTE: A pure function is a function who has output that is solely determined by 
// its input and that has no side effects
const Message = (props) => {
  return <div>{ props.text }</div>
}

// equivalent to:
class Message extends React.Component {
  render() {
    return(
      <div>{ this.props.text }</div>
    );
  }
};

// after object de-structuring
const Message = ({ text }) => (
  <div>{ text }</div>
); 


