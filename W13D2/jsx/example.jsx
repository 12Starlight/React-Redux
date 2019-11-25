// JSX
const quotes = (
  <div className='quotes' >
    <h1>I love Javascript</h1>
  </div>
);

// plain JavaScript
const quotes = React.createElement(
  'div',
  { className: 'quotes' },
  React.createElement('h1', {}, 'I love Javascript')
);

// Both blocks of code ultimately produce the same HTML:
<div class='quotes'><h1>I love JavaScript!</h1></div>

// which are then rendered onto document.body using:
ReactDom.render(quotes, document.body); 


// Interpolation (done using {} between tags)
let myClass = 'example';
const myElement = <h1 className={ myClass } >{ 1 + 2 + 3 }</h1>

// myElement renders as:
<h1 class='example'>
  6
  <h1></h1>
</h1>

// A return value is inserted into your element, so only a single expression is allowed
const myElement = (
  <h1>
    {
      1 + 2 + 3;
      4 + 5 + 6;
    }
  </h1>
);
// Throws an error