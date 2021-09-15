// Show page for a box.
import React from 'react'
import {Redirect} from 'react-router-dom'

import ItemsContainer from '../containers/ItemsContainer'

const Box = (props) => {
    // console.log(props)

    let box = props.boxes[props.match.params.id - 1]
    console.log(box)

    return (
        <div>
            <h2>
                {box ? box.name : null} - {box ? box.amount : null}
            </h2>
            <ItemsContainer/>
        </div>
        
    )
}

export default Box