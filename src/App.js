import React from 'react';
import {connect} from 'react-redux'; // connects a React component to a Redux store.
// import {fetchBoxes} from './actions/fetchBoxes';
import BoxesContainer from './containers/BoxesContainer';

class App extends React.Component {

  // componentDidMount(){
  //   // passing in some dummy data.
  //   // this.props.fetchBoxes({type: 'FETCH_BOXES', payload: {name: 'Box 1'}}) 
  // //   fetch('http://localhost:3001/api/v1/boxes')
  // //   .then(response => response.json())
  // //   .then(data => console.log(data))
  // }

  render(){
    return (
      <div className="App">
        <BoxesContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return (
//     boxes: state.boxes
//   )
// }

// export default connect(null, {fetchBoxes}) (App);
export default App;

/*
1. Importing the React and React-Redux libraries.
2. Importing the BoxesContainer component.
3. Creating a React component called App.
4. Rendering the BoxesContainer component inside the App component.
*/
