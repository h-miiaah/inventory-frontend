import React from 'react';
import {connect} from 'react-redux';
import {addBox} from '../actions/addBox';

class BoxInput extends React.Component {

    state = {name: '', amount: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBox(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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

export default connect(null, {addBox})(BoxInput);