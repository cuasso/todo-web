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


const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    remove={() => props.handleClick({ type: 'remove', index })}
                    completed={() => props.handleClick({ type: 'completed', index })}
                />
            ))}
        </ul>
    )
}

export default TodoList