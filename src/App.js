import React from 'react';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/boxes')
    .then(response => response.json())
    .then(data => console.log(data[0].items))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
