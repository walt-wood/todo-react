// This allows rendering diff output based on which state is active.
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // useState() is a React "hook", and can only be called in React component functions.
  // Sent false so Todo initial state is unopened.
  // useState() always return an array with two elements.
  // "const [var, function] =" is array destructoring concept in Javascript.
  // modalIsOpen contains first value in useState, and setModalIsOpen is a function used to change the value of modalIsOpen.
  // When setModalIsOpen is called, React will reexecute the component function which will update what is rendered on the screen.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // This approach would work in JavaScript, but it is an imperitive approach. For React, we use the declarative approach below, which describes the target result.
  // document.querySelector('button').addEventListener('click');
  /* Can add onClick attribute b/c these HTML tags are really React components, and they are case sensitive. 
        Note: Do not use regular function call (deleteHandler()) with parenthesis, b/c the function would be executed when the button element is rendered.
        We use (deleteHandler) w/o parenthesis to point to the function above.
        Must use className instead of class, b/c this is JSX.*/
  function deleteHandler() {
    // Switch to a different state where modal is open.
    setModalIsOpen(true);
  }
  // { modalIsOpen ? <Modal /> : null } renders content conditionally with ternary operator
  // { modalIsOpen && <Modal /> } In JS, if both values are true, the second will be returned. Therefore, we can use this instead of the above.
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
