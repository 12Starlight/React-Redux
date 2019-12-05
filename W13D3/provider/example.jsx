// Setup
// Terminal: npm intall --save react-redux 
import { Provider } from 'react-redux';

// Example of having to pass store to children using React
// app.jsx
import React from 'react';

const UserInfo = ({ store }) => (
  <div>
    { store.getState().username }
  </div>
);

const Header = ({ store }) => (
  <div>
    <UserInfo store={store} />
  </div>
);

const App = ({ store }) => (
  <div>
    <Header store={store} />
  </div>
);

export default App; 

// entry.js
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducer from './reducer.js';
import App from './app.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(reducer);
  const rootEl = documnet.getElementById('root');
  ReactDOM.render(<App store={store} />, rootEl);
});

// Root example
// root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store} >
    <App />
  </Provider>
);

export default Root;

// entry.js
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducer from './reducer.js';
import Root from './root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(reducer);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});

