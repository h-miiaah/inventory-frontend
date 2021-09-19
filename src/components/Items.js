import React from 'react'


const Items = (props) => {
    
    console.log(props.items)

    return (
        <div>
            {props.items && props.items.map(item => 
                <ul>
                    <li key = {item.id}>
                        Description: {item.description}
                        <br></br>
                        Style: {item.style}
                        <br></br>
                        Color: {item.color}
                        <br></br>
                        Size: {item.size}
                        <br></br>
                        Quantity: {item.quantity}
                    </li>
                </ul>
                )}
        </div>
        
    )
}

export default Items