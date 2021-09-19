import React from 'react';
import {connect} from 'react-redux';

class ItemInput extends React.Component {

    state = {
       kind: '',
       description: '',
       style: '',
       color: '',
       size: '',
       quantity: '',
       image_url: '' 
    }

    render(){
        return(
            <div>
                <form>
                    <label>Add or Remove Item </label>
                    <select>
                        <option>add</option>
                        <option>remove</option>
                    </select>

                    <br></br>

                    <label>Item Description: </label>
                    <input type="text" name="description" value={this.state.description}></input>

                    <br></br>
                    
                    <label>Item Style: </label>
                    <input type="text" name="style" value={this.state.style}></input>

                    <br></br>
                    
                    <label>Item Color: </label>
                    <input type="text" name="color" value={this.state.color}></input>

                    <br></br>
                    
                    <label>Item Size: </label>
                    <input type="text" name="size" value={this.state.size}></input>

                    <br></br>
                    
                    <label>Item Quantity: </label>
                    <input type="text" name="quantity" value={this.state.quantity}></input>

                    <br></br>

                    <label>Item Image URL: </label>
                    <input type="text" name="image_url" value={this.state.image_url}></input>

                    <br></br>


                </form>
            </div>
        )
    }
}

export default connect(null) (ItemInput)