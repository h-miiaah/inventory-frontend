import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchBoxes} from '../actions/fetchBoxes';
import Boxes from '../components/Boxes';
import BoxInput from '../components/BoxInput';

class BoxesContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBoxes();
    }

    render() {
        return(
            <div>
                <Route path='/boxes/new' component={BoxInput}/>
                <Route path='/boxes' render={() => <Boxes boxes={this.props.boxes}/> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        boxes: state.boxes
    }
}

export default connect(mapStateToProps, {fetchBoxes})(BoxesContainer);