// Show page for a box.
import React from 'react'

const Box = (props) => {
    console.log(props)
    return (
        <div>
            {props.box.name} - {props.box.amount}
        </div>
    )
}

export default Box