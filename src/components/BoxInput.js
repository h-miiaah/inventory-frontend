import React from 'react';

class BoxInput extends React.Component {

    state = {name: '', amount: ''}

    render(){
        return(
            <div>
                <form>
                    <label>Box Name </label>
                   <input type='text' placeholder='Name'></input>
                   <br></br>
                   <label>Box Amount </label>
                   <input type='text' placeholder='Amount'></input>
                </form>
            </div>
        )
    }
}

export default BoxInput;