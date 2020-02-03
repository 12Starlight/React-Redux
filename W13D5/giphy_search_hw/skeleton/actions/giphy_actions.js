import * as APIUtil from '../util/api_util';


// Build Constants
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';


// Regular Action Creator
export const receiveSearchGiphys = (giphys) => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};



