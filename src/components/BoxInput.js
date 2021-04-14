import React from 'react';

class BoxInput extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <label>Box Name </label>
                   <input type='text' placeholder='Box Name'></input>
                   <br></br>
                   <label>Box Amount </label>
                   <input type='text' placeholder='Box Amount'></input>
                </form>
            </div>
        )
    }
}

export default BoxInput;