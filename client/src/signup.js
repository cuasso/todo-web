import React from 'react';
import useSingUpForm from './signupHooks'

const Signup = () => {

    const signup = () => {
        alert(`login with this data:
                username:${inputs.username}
                password:${inputs.password}`)
    }

    const {inputs,handleSubmit,handleInputChange} = useSingUpForm(signup)
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={handleInputChange} value={inputs.username} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
            </div>
            <button type="submit">Sing Up</button>
        </form>
    )
}

export default Signup;