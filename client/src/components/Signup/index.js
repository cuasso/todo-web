import React from 'react'
import useSingUpForm from '../../hooks/formHooks'
import './style.scss'

const Signup = () => {

    const signup = () => {
        alert(`login with this data:
                username:${inputs.username}
                password:${inputs.password}`)
    }

    const { inputs, handleSubmit, handleInputChange } = useSingUpForm(signup)
    return (
        <div>
            <div class="container">
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={handleInputChange} value={inputs.username} required />
                    <br />
                    <input type="password" name="password" placeholder="password" onChange={handleInputChange} value={inputs.password} required />
                </form>
                <a href="#" class="link">forgot your password?</a><br />

                <div>
                    <button class="register">
                        <span>register</span>
                    </button>
                    <button class="sign in">
                        <span>sign in</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;