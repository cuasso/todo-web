import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { getSessionCookie } from '../common/session'

const useTodo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    const firstUpdate = useRef(true);

    useEffect(() => {
        let session = getSessionCookie()
        axios.get(`http://localhost:9000/api/${session.token}/todos`)
            .then(res => {
                if (res.status === 200) {
                    console.log("he llegado perras")
                    console.log(res.data.todos)
                    setTodos(res.data.todos)
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        let session = getSessionCookie()
        if (firstUpdate.current) {
            firstUpdate.current = false
            console.log("Es la primera vez")
            console.log(todos)
        } else {
            console.log("Ya no es la primera vez wey")
            console.log(todos)
            axios.post('http://localhost:9000/api/todos', { userSession: session.token, todos })
        }

    }, [todos])

    return {
        todos,
        setTodos,
        value,
        setValue
    }
}

export default useTodo


