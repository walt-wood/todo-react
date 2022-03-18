// Provide gray backdrop when Modal is open
// The div has no content, so can be written as self-closing.
function Backdrop(props) {
  // Using this div's built-in onClick prop to connect Backdrop's created prop onCancel in Todo.js.
  // This allows the closing of the modal when the background is clicked.
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
