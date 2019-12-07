import React from 'react';

const Signup = () => {
    return(
        <form>
            <div>
                <label>Username</label>
                <input type="text" name="username" required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" required />
            </div>
            <button type="submit">Sing Up</button>
        </form>
    )
}

export default Signup;