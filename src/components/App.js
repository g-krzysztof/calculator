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
      if (this.state.math === "") {
        this.setState(prevState => ({
          display: "0",
          secondDisplay: prevState.display,
          math: value
        }))
      }
      if (this.state.math.length === 1) {
        this.setState(prevState => ({
          display: parseFloat(prevState.secondDisplay) + parseFloat(prevState.display),
          secondDisplay: "",
          math: ""
        }))

      }
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