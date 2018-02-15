import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    console.log("constructing");
  }
  
  render() {
    return (<div>blahblahblah</div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));