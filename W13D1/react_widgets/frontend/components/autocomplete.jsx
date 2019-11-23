import React from 'react';


class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      search: ''
    }

    this.changedValue = this.changedValue.bind(this);
    this.searchVal = this.searchVal.bind(this); 
  }

  changedValue(e) {
    this.setState({
      inputVal: e.currentTarget.value
    })
  };

  searchVal(e) {
    this.setState({
      // search: e.target.value
      search: e.currentTarget.value   
    })
  }

  forceValue(val) {
    return () => this.setState({
      inputVal: val 
    })
  }


  render() {
    const { names } = this.props; 
    const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(this.state.inputVal.toLowerCase())
    });

    const nameLis = filteredNames.map((name, i) => {
      return <li key={i} onClick={ this.forceValue(name) } className="name" >{ name }</li>
    });

    window.forceValue = this.forceValue.bind(this); 
    console.log(this.state.inputVal); 
    return(
      <section className="autocomplete_wrapper">
        <div className="search_container">
          <input onChange={ this.changedValue } className="search" placeholder="Search" value={ this.state.inputVal } />
        </div>
        <article>
          <ul className="name_container">
          { nameLis } 
          </ul>
        </article>
      </section>
    )
  }
}


export default AutoComplete; 