import React from 'react';
import '../css/App.css';
import Display from './Display';
import Button from './Button';

class App extends React.Component {
  state = {
    display: "42509",
  }
  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <div className="buttons-wrapper">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
        </div>
      </div>
    );
  }
}

export default App;