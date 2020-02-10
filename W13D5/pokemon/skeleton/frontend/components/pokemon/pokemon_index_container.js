// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';


// mapStateToProps
const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state)
}); 

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex); 





