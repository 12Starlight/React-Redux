import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon(); 
  }


  render() {
    const { pokemon } = this.props; 
    
    let allPokemon = pokemon.map((pokem) => {
      return <li key={pokem.id} >{pokem.name} <span><img className="poke_img" src={pokem.image_url}></img></span></li>
    })

    return (
      <div>
        <ul>
          { allPokemon }
        </ul>
      </div>
    );
  }
}


export default PokemonIndex; 







