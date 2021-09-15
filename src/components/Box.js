// Show page for a box.
import React from 'react'
import {Redirect} from 'react-router-dom'

const Box = (props) => {
    // console.log(props)

    let box = props.boxes[props.match.params.id - 1]
    console.log(box)

    return (
        <li>
            {box ? null : <Redirect to='/boxes'/>}
            {box ? box.name : null} - {box ? box.amount : null}
        </li>
    )
}

export default Box