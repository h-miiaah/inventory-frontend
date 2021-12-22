import React from 'react';
import {connect} from 'react-redux';
import {addBox} from '../actions/addBox';

class BoxInput extends React.Component {

    state = {name: '', amount: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.name);
    }

    // incrementCounter = () => {
    //     this.setState((prevState) => {
    //         return {
    //             ...this.state,
    //             counter: prevState.counter + 1
    //         }
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBox(this.state);
        this.setState({name: '', amount: ''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add Box</h2>
                    <label>Box Name </label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}></input>
                   <br></br>
                   <label>Box Amount </label>
                   <input type='text' placeholder='Amount' value={this.state.amount} name="amount" onChange={this.handleChange}></input>
                   <br></br>
                   <input type="submit" value="Add Box"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBox})(BoxInput);

/*
1. We’re creating a state object that holds the name and amount of the box.
2. We’re creating a handleChange function that updates the state object whenever the user changes the input.
3. We’re creating a handleSubmit function that sends the state object to the addBox action creator.
4. We’re creating a form that contains two input fields and a submit button.
5. We’re creating a label for each input field.
6. We’re creating an input field for each label.
7. We’re creating a submit button that calls the handleSubmit function.
*/
