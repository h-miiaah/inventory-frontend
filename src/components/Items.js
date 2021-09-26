import React from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/deleteItem'

const Items = (props) => {
    
    // console.log(props.items)

    const handleDelete = (item) => {
        props.deleteItem(item.id, item.box_id)
    }

    return (
        <div>
            {props.items && props.items.map(item => 
                <ul>
                    <li key = {item.id} class="listitems">
                        Description: {item.description}
                        <br></br>
                        Style: {item.style}
                        <br></br>
                        Color: {item.color}
                        <br></br>
                        Size: {item.size}
                        <br></br>
                        Quantity: {item.quantity}
                        <br></br>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                </ul>
                )}
        </div>
        
    )
}

export default connect(null, {deleteItem})(Items)