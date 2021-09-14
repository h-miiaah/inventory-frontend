import React from 'react';
import Box from './Box'

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => <div key={box.id}><Box box={box}/> </div>)}
        </div>
    )
}

export default Boxes;