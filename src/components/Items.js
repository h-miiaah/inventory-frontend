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

/*
1. We’re mapping over the items array and creating a new li element for each item.
2. We’re setting the key to the item’s id.
3. We’re setting the class to listitems.
4. We’re setting the description to the item’s description.
5. We’re setting the style to the item’s style.
6. We’re setting the color to the item’s color.
7. We’re setting the size to the item’s size.
8. We’re setting the quantity to the item’s quantity.
9. We’re creating a button that will delete the item.
10. We’re passing the handleDelete function as a prop to the button.
11. We’re passing the item as a prop to the handleDelete function.
*/
