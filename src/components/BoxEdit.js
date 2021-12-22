import React from 'react';
import {connect} from 'react-redux';
import {editBox} from '../actions/editBox';

class BoxEdit extends React.Component {

    state = {name: '', amount: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let box = {...this.state, id: this.props.box.id}
        this.props.editBox(box);
        this.setState({name: '', amount: ''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit Box</h2>
                    <label>Box Name </label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}></input>
                   <br></br>
                   <label>Box Amount </label>
                   <input type='text' placeholder='Amount' value={this.state.amount} name="amount" onChange={this.handleChange}></input>
                   <br></br>
                   <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {editBox})(BoxEdit);

/*
1. We’re creating a state object that holds the box name and amount.
2. We’re creating a handleChange function that updates the state object whenever the user changes the input.
3. We’re creating a handleSubmit function that sends the updated box to the store.
4. We’re creating a render function that displays the box name and amount.
5. We’re exporting the component.
*/
