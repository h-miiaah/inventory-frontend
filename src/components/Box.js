// Show page for a box.
import React from 'react'

const Box = (props) => {
    console.log(props)
    return (
        <li>
            {props.box.name} - {props.box.amount}
        </li>
    )
}

export default Box