import React from 'react';


const Modal = ({ board, restartGame }) => {
  let text = ''
  if (board.lost()) {
    text = 'Sorry You Lost, Try Again :D'
  } else if (board.won()) {
    text = 'Congradulations, you the BOSS ;)'
  }

  return (
    <section className="modal_section">
      <article className="modal_article">
        <span>😎</span>
        <h1>Hello, Player</h1>
        <p>{text}</p>
        <button onClick={() => restartGame()}>Play Again</button>
      </article>
      <div className="modal_hide" ></div>
    </section>
  );
}


export default Modal;