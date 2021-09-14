import React from 'react';
import Box from './Box'

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => <li key={box.id}><Box box={box}/> </li>)}
        </div>
    )
}

export default Boxes;