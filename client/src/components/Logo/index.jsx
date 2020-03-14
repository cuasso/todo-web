import React from 'react'
import logo from './logo.png'
import './style.scss'

const Logo = () => {

    return (
        <div class="logo-container">
            <img src={logo} alt="Logo" />
            <span>todo web</span>
        </div>
    )
}

export default Logo