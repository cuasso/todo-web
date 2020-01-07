import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import './style.scss'


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        axios.get('http://localhost:9000/api/todos')
            .then(res => {
                if (res.status === 200) {
                    setTodos(res.data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
        axios.post('http://localhost:9000/api/todos',todos)
    },[todos])

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
        else if (type === 'change') newArr[index].done = !newArr[index].done

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