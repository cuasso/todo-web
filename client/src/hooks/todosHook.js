import { useState, useEffect } from 'react'
import axios from 'axios'

const useTodo = () => {
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

    useEffect(() => {
        axios.post('http://localhost:9000/api/todos', todos)
    }, [todos])

    return {
        todos,
        setTodos,
        value,
        setValue
    }
}

export default useTodo