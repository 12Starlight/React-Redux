import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { addOrange, addApple, clearFruit } from './actions';

// code to test on the window
window.store = store; 
window.addOrange = addOrange;
window.addApple = addApple;
window.clearFruit = clearFruit;


const App = () => (
	<div>Hello World</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});








