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
                <ItemInput/>
                <Items items={this.props.box && this.props.box.items}/>
            </div>
        )
    }
}

export default ItemsContainer