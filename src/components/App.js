import React from 'react';
import '../css/App.css';
import Display from './Display';
import Button from './Button';

class App extends React.Component {
  state = {
    display: "0",
    secondDisplay: "",
    math: "",
  }

  handleClick = (e) => {
    let value = e.target.value;
    let number = parseFloat(e.target.value);
    let pattern = new RegExp("^[0-9]$");
    let result = pattern.test(number);

    if (result) {
      if (this.state.display === "0") {
        this.setState({
          display: number
        })
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString()
        }))
      }
    } else {
      this.setState(prevState => ({
        display: "0",
        secondDisplay: prevState.display,
        math: value
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <div className="buttons-wrapper">
          <Button name="1" onClick={this.handleClick} />
          <Button name="2" onClick={this.handleClick} />
          <Button name="3" onClick={this.handleClick} />
          <Button name="+" onClick={this.handleClick} />
          <Button name="=" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;