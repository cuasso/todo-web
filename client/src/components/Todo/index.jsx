import React, { useState, Fragment } from 'react'
import TodoList from './TodoList'
import './style.scss'


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
            <form onSubmit={handleSubmit} >
                <h1>Add a Task here!</h1>
                <input type='text' value={value} onChange={e => setValue(e.target.value)} />
            </form>
            <TodoList todos={todos} handleClick={handleClick} />
        </Fragment>
    )
}

export default Todo