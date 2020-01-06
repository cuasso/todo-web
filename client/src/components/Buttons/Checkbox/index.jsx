import React from 'react'
import './style.scss'

const Checkbox = (props) => {
    return (
        <div class="container">
            <div class="round">
                <input type="checkbox" id={`${props.index}_checkbox`} />
                <label for={`${props.index}_checkbox`}></label>
            </div>
        </div>
    )
}

export default Checkbox
