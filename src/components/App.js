import React from 'react';
import '../css/App.css';
import Display from './Display';

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;