import React from 'react';
import '../css/App.css';
import Display from './Display';
import Button from './Button';

class App extends React.Component {
  state = {
    display: "0",
    secondDisplay: "",
    math: "",
    showResult: false
  }

  handleNumber = (e) => {
    if (this.state.showResult === false) {
      // let number = parseFloat(e.target.value);
      let number = e.target.value;

      if (this.state.display === "0") {
        if (number === ".") {
          this.setState({
            display: "0."
          })
        } else {
          this.setState({
            display: number
          })
        }
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString()
        }))
      }
    }

    if (this.state.showResult === true) {
      let number = e.target.value;
      this.setState({
        display: number,
        secondDisplay: "",
        math: "",
        showResult: false
      })
    }
  }

  handleZero = (e) => {
    let number = parseFloat(e.target.value);
    if (this.state.display === "0" || this.state.display === 0) {
      return
    } else {
      this.setState(prevState => ({
        display: prevState.display + number.toString()
      }))
    }
  }

  handleClear = () => {
    this.setState({
      display: "0",
      secondDisplay: "",
      math: "",
      showResult: false
    })
  };

  handleMath = (e) => {
    let math;
    if (e.target.value === "+") { math = (a, b) => { return a + b } }
    if (e.target.value === "-") { math = (a, b) => { return b - a } }
    if (e.target.value === "*") { math = (a, b) => { return a * b } }
    if (e.target.value === "/") { math = (a, b) => { return b / a } }
    this.setState(prevState => ({
      display: "0",
      secondDisplay: prevState.display,
      math,
    }))
  }

  round = (n, k) => {
    var factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * factor) / 10);
    return n / (factor / 10);
  }

  handleScore = () => {
    if (this.state.math.length > 0) {
      this.setState(prevState => ({
        display: this.round(prevState.math(parseFloat(prevState.display), parseFloat(prevState.secondDisplay)), 5),
        showResult: true,
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <div className="buttons-wrapper">
          <Button class="Button__btn" name="1" onClick={this.handleNumber} />
          <Button class="Button__btn" name="2" onClick={this.handleNumber} />
          <Button class="Button__btn" name="3" onClick={this.handleNumber} />
          <Button class="Button__btn" name="4" onClick={this.handleNumber} />
          <Button class="Button__btn" name="5" onClick={this.handleNumber} />
          <Button class="Button__btn" name="6" onClick={this.handleNumber} />
          <Button class="Button__btn" name="7" onClick={this.handleNumber} />
          <Button class="Button__btn" name="8" onClick={this.handleNumber} />
          <Button class="Button__btn" name="9" onClick={this.handleNumber} />
          <Button class="Button__btn" name="0" onClick={this.handleZero} />
          <Button class="Button__btn" name="." onClick={this.handleNumber} />
          <Button class="Button__btn" name="clear" onClick={this.handleClear} />
          <Button class="Button__btn" name="+" onClick={this.handleMath} />
          <Button class="Button__btn" name="-" onClick={this.handleMath} />
          <Button class="Button__btn" name="*" onClick={this.handleMath} />
          <Button class="Button__btn" name="/" onClick={this.handleMath} />
          <Button class="Button__btn Button__btn--score" name="=" onClick={this.handleScore} />
        </div>
      </div>
    );
  }
}

export default App;