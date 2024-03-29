import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/addItem';

class ItemInput extends React.Component {

    state = {
       kind: 'add',
       description: '',
       style: '',
       color: '',
       size: '',
       quantity: '',
       image_url: '' 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state, this.props.box.id)
        this.setState({
            kind: 'add',
            description: '',
            style: '',
            color: '',
            size: '',
            quantity: '',
            image_url: ''
        })
    } 

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add Or Remove Item To Box</h2>
                    <label>Add or Remove Item </label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>add</option>
                        <option>remove</option>
                    </select>

                    <br></br>

                    <label>Item Description: </label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>

                    <br></br>
                    
                    <label>Item Style: </label>
                    <input type="text" name="style" value={this.state.style} onChange={this.handleChange}></input>

                    <br></br>
                    
                    <label>Item Color: </label>
                    <input type="text" name="color" value={this.state.color} onChange={this.handleChange}></input>

                    <br></br>
                    
                    <label>Item Size: </label>
                    <input type="text" name="size" value={this.state.size} onChange={this.handleChange}></input>

                    <br></br>
                    
                    <label>Item Quantity: </label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>

                    <br></br>

                    <label>Item Image URL: </label>
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange}></input>

                    <br></br>

                    <input type="submit"></input>

                    <br></br>


                </form>
            </div>
        )
    }
}

export default connect(null, {addItem}) (ItemInput)

/*
1. The state is set up to hold the values of the form fields.
2. The handleChange function is called whenever a form field is changed.
3. The handleSubmit function is called when the form is submitted.
4. The addItem function is called when the form is submitted.
5. The addItem function is passed the state and the box id.
6. The state is reset to empty after the form is submitted.
7. It creates a form that allows the user to add or remove items from the box.
*/
