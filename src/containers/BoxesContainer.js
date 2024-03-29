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

/*
1. The componentDidMount() method is called when the component is already placed in the DOM.
2. The fetchBoxes() method is called when the component is already placed in the DOM.
3. The render() method returns the JSX code that will be rendered to the DOM.
4. The Switch component is used to return the first route that matches the path.
5. The Route component is used to render the BoxInput component when the path is /boxes/new.
6. The Route component is used to render the Box component when the path is /boxes/:id.
7. The Route component is used to render the Boxes component when the path is /boxes.
*/
