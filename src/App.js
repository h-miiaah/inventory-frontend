import React from 'react';
import {connect} from 'react-redux';
import {fetchBoxes} from './actions/fetchBoxes';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchBoxes({type: 'FETCH_BOXES', payload: {name: 'Box 1'}}) // passing in some dummy data.
  //   fetch('http://localhost:3001/api/v1/boxes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return (
//     boxes: state.boxes
//   )
// }

export default connect(null, {fetchBoxes}) (App);
