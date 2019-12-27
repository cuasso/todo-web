import React from 'react'
import useSingUpForm from '../../hooks/formHooks'
import './style.scss'
import Logo from '../Logo'
import axios from 'axios'

const Signup = () => {

    const signup = () => {
        axios.post('http://localhost:9000/api/authenticate',inputs)
            .then(res => {
                alert(JSON.stringify(res.data))
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const { inputs, handleSubmit, handleInputChange } = useSingUpForm(signup)
    return (
        <div class="login-container">
            <Logo />
            <div class="signin-container">
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={handleInputChange} value={inputs.username} required />
                    <br />
                    <input type="password" name="password" placeholder="password" onChange={handleInputChange} value={inputs.password} required />
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
        </div>
    )
}

export default Signup