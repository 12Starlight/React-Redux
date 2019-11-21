import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0 
    }

    this.indexChange = this.indexChange.bind(this); 
  }

  indexChange(idx) {
    this.setState({
      index: idx
    });
  }


  render() {
    const { tabs } = this.props; 
    const tabLis = tabs.map((tab, i) => {
      return(
        <h1 key={i} onClick={() => this.indexChange(i)} >{ tab.title }</h1>
      ) 
    })
    
    console.log(this.state.index) 
    return (
      <div>
        <ul>{ tabLis }</ul>
        <article>
          <div>{ tabs[this.state.index].content }</div>
        </article>
      </div>
    );
  } 
}


export default Tabs; 