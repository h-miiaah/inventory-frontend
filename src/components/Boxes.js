import React from 'react';
import {Route, Link} from 'react-router-dom'
import Box from './Box'

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => 
            <ul>
                <li key={box.id} class="boxeslist">
                    <Link to={`/boxes/${box.id}`}>{box.name}</Link>
                </li>
            </ul>)}
        </div>
    )
}

export default Boxes;

/*
1. We’re mapping over the boxes array and returning a list item for each box.
2. We’re using the box’s id as the key for the list item.
3. We’re using the box’s name as the link text.
4. We’re using the box’s id as the href for the link.
*/
