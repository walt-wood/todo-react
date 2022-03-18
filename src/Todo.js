function Todo(props) {
    // This approach would work in JavaScript, but it is an imperitive approach. For React, we use the declarative approach below, which describes the target result.
    // document.querySelector('button').addEventListener('click');
    function deleteHandler() {
        console.log("Clicked!");
    }
    return (
    <div className="card">
        <h2>{props.text}</h2>
        {/* Must use className instead of class, b/c this is JSX.*/}
        <div className="actions">
            {/* Can add onClick attribute b/c these HTML tags are really React components, and they are case sensitive. 
                Note: Do not use regular function call (deleteHandler()) with parenthesis, b/c the function would be executed when the button element is rendered.
                We use (deleteHandler) w/o parenthesis to point to the function above.*/}
            <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
    </div>
    );
}

export default Todo;