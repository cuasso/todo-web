import React, { useState, Fragment } from 'react'
import TodoItem from './TodoItem'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} >
            <spa>Add a Task here!</spa>
            <input
                type='text'
                value={props.value}
                onChange={props.onChange}
            />
        </form>
    )
}


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if (value === '') return alert('Task name is required')

        const newArr = todos.slice()
        newArr.splice(0, 0, { name: value, done: false })
        setTodos(newArr)
        setValue('')
    }

    const handleClick = ({ type, index }) => {
        const newArr = todos.slice()
        if (type === 'remove') newArr.splice(index, 1)
        else if (type === 'completed') newArr[index].done = true

        return setTodos(newArr)
    }

    return (
        <Fragment>
            <Form
                onSubmit={handleSubmit}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        remove={() => handleClick({ type: "remove", index })}
                        completed={() => handleClick({ type: "completed", index })}
                    />
                ))}
            </ul>
        </Fragment>
    )
}


export default Todo