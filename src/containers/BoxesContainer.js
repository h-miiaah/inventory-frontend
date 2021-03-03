import React from 'react';
import Boxes from '../components/Boxes';
import BoxInput from '../components/BoxInput';

class BoxesContainer extends React.Component {
    render() {
        return(
            <div>
                <BoxInput />
                <Boxes />
            </div>
        )
    }
}

export default BoxesContainer;