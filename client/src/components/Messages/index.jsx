import React from 'react'
import error from './error-image.png'
import './style.scss'

const MessageError = (props) => {
    return (
        <div>
            {props.show && <div class="error-message">
                <img src={error} alt="error-image" />
                <span>{props.message}</span>
            </div>}
        </div>

    )
}

export default MessageError