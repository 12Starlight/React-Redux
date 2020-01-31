// import { merge } from 'lodash'; 


class Store {
  constructor(rootReducer, globalState = rootReducer('', '', '')) {
    this.globalState = globalState; 
    this.rootReducer = rootReducer; 
    this.subscriptions = [];
  }

  getState() {
    // return merge({}, this.globalState);
    return Object.assign({}, this.globalState); 
  }

  dispatch(action) {
    // console.log(this.subscriptions);
    this.globalState = this.rootReducer(this.globalState, action, this.subscriptions); 
  }

  subscribe(subscript) {
    this.subscriptions.push(subscript)
  }

}

module.exports = Store;