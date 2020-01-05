import React from 'react'
import './style.scss'


const TodoItem = (props) => {
    const { name, done } = props.todo
    return (
        <li class='li-todo'>
            <input type='checkbox'/>
            <span>{name}</span>
            <button onClick={props.remove} />
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