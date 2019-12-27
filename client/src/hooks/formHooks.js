import {useState} from 'react'

const useSingUpForm = (callback) => {
    const[inputs,setInputs] = useState({})
    
    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault()
        }
        callback()
    }

    const handleInputChange = (event) => {
        event.persist()
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value
        }))
    }

    const clearInputs = () => {
        setInputs({
            password: '',
            username: ''
        })
    }

    return {
        handleSubmit,
        handleInputChange,
        clearInputs,
        inputs
    }
}

export default useSingUpForm