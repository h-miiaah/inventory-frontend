// Show page for a box.
import React from 'react'
import {Redirect} from 'react-router-dom'
import EditBox from './BoxEdit'

import ItemsContainer from '../containers/ItemsContainer'
import BoxEdit from './BoxEdit'

const Box = (props) => {
    // console.log(props)

    // let box = props.boxes[props.match.params.id - 1]
    let box = props.boxes.filter(box => box.id == props.match.params.id)[0] // searches the box by its index in the box array.
    // console.log(box)

    return (
        <div>
            <h2>
                {box ? box.name : null} - {box ? box.amount : null}
            </h2>
            <ItemsContainer box={box}/>
            <br></br>
            <BoxEdit box={box}/>
        </div>
        
    )
}

export default Box