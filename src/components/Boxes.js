import React from 'react';
import {Route, Link} from 'react-router-dom'
import Box from './Box'

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => 
            <ul>
                <li key={box.id}>
                    <Link to={`/boxes/${box.id}`}>{box.name}</Link>
                </li>
            </ul>)}
        </div>
    )
}

export default Boxes;