// import { merge } from 'lodash'; 


class Store {
  constructor(rootReducer, globalState = rootReducer('','')) {
    this.globalState = globalState; 
    this.rootReducer = rootReducer; 
  }

  getState() {
    // return merge({}, this.globalState);
    return Object.assign({}, this.globalState); 
  }

  dispatch(action) {
    this.globalState = this.rootReducer(this.globalState, action); 
  }
}

module.exports = Store;