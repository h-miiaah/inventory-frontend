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