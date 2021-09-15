import React from 'react';
import {Route, Link} from 'react-router-dom'
import Box from './Box'

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => 
            <li key={box.id}>
                <Link to={`/boxes/${box.id}`}>{box.name}</Link>
            </li>)}
        </div>
    )
}

export default Boxes;