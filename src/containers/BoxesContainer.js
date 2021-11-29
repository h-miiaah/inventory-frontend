import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'; // Switch returns the first route that matches the path.
import {fetchBoxes} from '../actions/fetchBoxes';
import Boxes from '../components/Boxes';
import Box from '../components/Box';
import BoxInput from '../components/BoxInput';
import NavigationBar from '../components/NavigationBar';

class BoxesContainer extends React.Component {

    componentDidMount(){ // allows you to use the React code when the component is already placed in the DOM.
        this.props.fetchBoxes();
    }

    render() {
        return(
            <div>
                <NavigationBar/>
                <Switch>
                <Route path='/boxes/new' component={BoxInput}/>
                <Route path='/boxes/:id' render={(routerProps) => <Box {...routerProps} boxes={this.props.boxes}/> } />
                <Route exact path='/boxes' render={(routerProps) => <Boxes {...routerProps} boxes={this.props.boxes}/> } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => { //used to select the part of the data from the store that the connected component needs.
    return {
        boxes: state.boxes
    }
}

export default connect(mapStateToProps, {fetchBoxes})(BoxesContainer);