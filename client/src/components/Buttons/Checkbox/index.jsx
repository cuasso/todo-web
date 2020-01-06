import React from 'react'
import './style.scss'

const Checkbox = (props) => {
    const { index, value } = props
    return (
        <div class="container">
            <div class="round">
                <input type="checkbox" id={`${props.index}_checkbox`} onChange={props.onChange} defaultChecked={value}/>
                <label for={`${index}_checkbox`}></label>
            </div>
        </div>
    )
}

export default Checkbox
