import { merge } from 'lodash'; 


class Store {
  constructor(rootReducer, globalState = {}) {
    this.globalState = globalState; 
  }

  getState() {
    return merge({}, this.globalState); 
  }
}


\
]=[-P0965]