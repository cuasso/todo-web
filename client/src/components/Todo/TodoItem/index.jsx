import React from "react"

const TodoItem = (props) => {
    const { name, done } = props.todo
    return (
        <li >
            {name}
            {!done ? <button onClick={props.completed}>Completed</button> : ""}
            <button onClick={props.remove}>Remove</button>
        </li>
    )
}

export default TodoItem