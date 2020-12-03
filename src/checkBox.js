import React from 'react'

export const CheckBox = props => {
    return (<div>
        <li class="list-group-item">
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
            <h6>{props.price} Rs</h6>
        </li>
    </div>
    )
}

export default CheckBox