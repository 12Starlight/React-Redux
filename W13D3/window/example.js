// Example to type in the browser console
// if you run this in the console 'this' is the global context of the window
const testMe = (testing) => { console.log(this) }

window.testMe() // => Window

// do not need to reference `window` because we already defined the function on 
// the window
testMe() // => Window 

