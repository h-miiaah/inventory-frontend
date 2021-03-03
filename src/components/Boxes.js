import React from 'react';

const Boxes = (props) => {
    return(
        <div>
            {props.boxes.map(box => <li key={box.id}> {box.name} - {box.amount}</li>)}
        </div>
    )
}

export default Boxes;