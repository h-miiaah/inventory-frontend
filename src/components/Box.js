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
            <h1>
                {/* {box ? box.name : null} - {box ? box.amount : null} */}
                {box ? box.name : null}
            </h1>
            <ItemsContainer box={box}/>
            <br></br>
            <BoxEdit box={box}/>
        </div>
        
    )
}

export default Box

/*
1. It first checks if the box exists. If it does, it renders the box name and the items in the box.
2. If the box doesn’t exist, it redirects to the home page.
3. It then renders the box edit form.
4. If the box doesn’t exist, it redirects to the home page.
*/
