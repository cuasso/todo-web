import React from 'react'
import './style.scss'
import error from '../Buttons/Img/error-image.png'

const RemoveButton = (props) => {
    return (
        <a class="remove-button" href="#" role="button" onClick={props.onClick}>
            <span>remove</span>
            <div class="icon">
                <img src={error} class="fa fa-remove" />
            </div>
        </a>
    )
}

export default RemoveButton