// Synthetic Events are the React equivalent of the vanilla DOM's 
// addEventListener(). These allow you to pasas event listeners directly to
// your component via props
const handleClick = event => {
  event.preventDefault();
  alert('clicked!');
};

const SimpleButton = () => (
  <input type='submit' onClick={ handleClick } >
    Click Me!
  </input>
);

{/*
Notes: 
  handleClick() gets called before any normal things that come form a submit button
  would do (like issue a POST request). The click event, which represents the vanilla
  DOM event, is passed in. By calling 'event.preventDefault(), we are disabling the 
  button from trying to submit as it normaly would. Most of your event handlers will
  want to prevent the normal HTTP request and dispatch an asynchronous js request 
  instead, so they will call `preventDefault()`
*/}


// Types of Synthetic Events 
  {/*
    Form:
      onChange()
      onInput()
      onInvalid()
      onSubmit
    
    Mouse Events: 
      onClick()
      onContextMenu()
      onDoubleClick()
      onDrag()
      onDrop()
      onMouseMove()
  */}