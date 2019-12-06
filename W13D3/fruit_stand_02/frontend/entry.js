import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

// code to test on the window
window.store = store; 


const App = () => (
	<div>Hello World</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});




