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
        <h1 className="tabs_header" key={i} onClick={() => this.indexChange(i)} >{ tab.title }</h1>
      ) 
    })
    
    // console.log(this.state.index) 
    return (
      <div className="tabs">
        <h1 className="tabs_h1">Tabs</h1>
        <ul className="tabs_header_wrapper">{ tabLis }</ul>
        <article className="tabs_article_wrapper">
          <div className="tabs_content">{ tabs[this.state.index].content }</div>
        </article>
      </div>
    );
  } 
}


export default Tabs; 