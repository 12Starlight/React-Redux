import React from 'react';
import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

// export default () => ( // Created functional component to test
//   <div>I AM A COMPONENT</div>
// );


// mapStateToProps
const mapStateToProps = (state) => ({
  giphys: state.giphys
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch); 





