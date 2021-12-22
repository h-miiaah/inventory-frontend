// import React from 'react';

// class ItemsContainer extends React.Component {
//     render(){
//         return {
//             <div>
//                 ItemsContainer
//             </div>
//         }
//     }
// }

// export default ItemsContainer


import React from 'react';
import ItemInput from '../components/ItemInput'
import Items from '../components/Items'

class ItemsContainer extends React.Component {

    render() {
        return(
            <div>
                <ItemInput box={this.props.box}/>
                <Items items={this.props.box && this.props.box.items}/>
            </div>
        )
    }
}

export default ItemsContainer

/*
1. The ItemsContainer component is a React component that renders the ItemInput and Items components.
2. The ItemInput component is a React component that renders an input box and a button.
3. The Items component is a React component that renders a list of items.
*/
