import React from 'react'
import axios from 'axios'
import ErrorMessage from '../Messages'
import Logo from '../Logo'
import useSingUpForm from '../../hooks/formHooks'
import useMessage from '../../hooks/showMessage'
import './style.scss'

const Signin = (props) => {

    const { show,message,showMessage} = useMessage()
    const signup = () => {
        axios.post('http://localhost:9000/api/authenticate',inputs)
            .then(res => {
                props.history.push('/')
            })
            .catch(err => {
                if(err.response) {
                    showMessage(true,err.response.data.messageError)
                    
                } else {
                    showMessage(true,"An unexpected error has occurred. Try again please.")
                }
                clearInputs()
            })
    }
    
    const { inputs, handleSubmit, handleInputChange,clearInputs } = useSingUpForm(signup)
    return (
        <div class="login-container">
            <Logo />
            <div class="signin-container">
                <h2>login</h2>                
                <form onSubmit={handleSubmit}>
                    <input class={show && "error"} type="text" name="username" placeholder="username" onChange={handleInputChange} value={inputs.username} required />
                    <br />                    
                    <input class={show && "error"} type="password" name="password" placeholder="password" onChange={handleInputChange} value={inputs.password} required />
                    <a href="#" class="link">forgot your password?</a>
                    <div class="buttons-container">
                        <button class="register">
                            <span>register</span>
                        </button>
                        <button type="submit" class="sign in">
                            <span>sign in</span>
                        </button>
                    </div>
                </form>
            </div>
            <ErrorMessage message={message} show={show} />
        </div>
    )
}

export default Signin