import React from 'react';
import '../css/App.css';
import Display from './Display';
import Button from './Button';

class App extends React.Component {
  state = {
    display: "0",
    secondDisplay: "",
    math: 1,
    time: 1,
    operator: "",
    decimal: false
  }

  handleNumber = (e) => {

    if (this.state.time === 5) {
      let number = e.target.value;
      this.setState({
        display: number,
        secondDisplay: "",
        math: 1,
        time: 2,
        operator: "",
        decimal: false
      })
    }

    if (this.state.time === 1 || this.state.time === 2) {
      let number = e.target.value;
      if (this.state.display === "0") {
        this.setState({
          display: number,
          time: 2
        })
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString(),
          time: 2
        }))
      }
    }

    if (this.state.time === 3 || this.state.time === 4) {
      let number = e.target.value;
      if (this.state.display === "0") {
        this.setState({
          display: number,
          time: 4
        })
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString(),
          time: 4
        }))
      }
    }
  }

  handleDecimal = (e) => {
    let number = e.target.value;
    if (this.state.time === 1) {
      this.setState({
        display: "0.",
        time: 2,
        decimal: true
      })
    }
    if (this.state.time === 3) {
      this.setState({
        display: "0.",
        time: 4,
        decimal: true
      })
    }
    if (this.state.time === 2 && this.state.decimal === false) {
      this.setState(prevState => ({
        display: prevState.display + number.toString(),
        time: 2,
        decimal: true
      }))
    }
    if (this.state.time === 4 && this.state.decimal === false) {
      this.setState(prevState => ({
        display: prevState.display + number.toString(),
        time: 4,
        decimal: true
      }))
    }
    if (this.state.time === 5) {
      this.setState({
        display: "0.",
        secondDisplay: "",
        math: 1,
        time: 2,
        operator: "",
        decimal: true
      })
    }
  }

  handleZero = (e) => {
    if (this.state.time === 1 || this.state.time === 2) {
      let number = parseFloat(e.target.value);
      if (this.state.display === "0" || this.state.display === 0) {
        return
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString(),
          time: 2
        }))
      }
    }
    if (this.state.time === 3 || this.state.time === 4) {
      let number = parseFloat(e.target.value);
      if (this.state.display === "0" || this.state.display === 0) {
        return
      } else {
        this.setState(prevState => ({
          display: prevState.display + number.toString(),
          time: 4
        }))
      }
    }
    if (this.state.time === 5) {
      this.setState({
        display: "0",
        secondDisplay: "",
        math: 1,
        time: 2,
        operator: "",
        decimal: false
      })
    }
  }

  handleClear = () => {
    this.setState({
      display: "0",
      secondDisplay: "",
      math: 1,
      time: 1,
      operator: "",
      decimal: false
    })
  };

  round = (n, k) => {
    var factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * factor) / 10);
    return n / (factor / 10);
  }

  handleMath = (e) => {
    if (this.state.math === 1) {
      let math;
      let operator = e.target.value;
      if (e.target.value === "+") { math = (a, b) => { return a + b } }
      if (e.target.value === "-") { math = (a, b) => { return b - a } }
      if (e.target.value === "*") { math = (a, b) => { return a * b } }
      if (e.target.value === "/") { math = (a, b) => { return b / a } }
      this.setState(prevState => ({
        display: "",
        secondDisplay: prevState.display,
        math,
        operator,
        time: 3,
        decimal: false
      }))
    }
    if (this.state.time === 4) {
      this.handleScore(e);
    }
  }

  handleScore = (e) => {

    let math;
    let operator = e.target.value;
    if (e.target.value === "+") { math = (a, b) => { return a + b } }
    if (e.target.value === "-") { math = (a, b) => { return b - a } }
    if (e.target.value === "*") { math = (a, b) => { return a * b } }
    if (e.target.value === "/") { math = (a, b) => { return b / a } }

    if (e.target.value === "=" && this.state.time === 4) {

      if (this.state.math.length > 0) {
        this.setState(prevState => ({
          display: this.round(prevState.math(parseFloat(prevState.display), parseFloat(prevState.secondDisplay)), 5),
          time: 5,
          math: 1,
          operator: ""
        }))
      }
    } else {
      if (this.state.math.length > 0 && e.target.value !== "=") {
        this.setState(prevState => ({
          secondDisplay: this.round(prevState.math(parseFloat(prevState.display), parseFloat(prevState.secondDisplay)), 5),
          time: 3,
          math: math,
          operator: operator,
          display: ""
        }))
      }
    }
  }

  handleKeyDown = (event) => {
    let { key } = event;
    if (key === "1") { this.handleNumber({ target: { value: "1" } }); }
    if (key === "2") { this.handleNumber({ target: { value: "2" } }); }
    if (key === "3") { this.handleNumber({ target: { value: "3" } }); }
    if (key === "4") { this.handleNumber({ target: { value: "4" } }); }
    if (key === "5") { this.handleNumber({ target: { value: "5" } }); }
    if (key === "6") { this.handleNumber({ target: { value: "6" } }); }
    if (key === "7") { this.handleNumber({ target: { value: "7" } }); }
    if (key === "8") { this.handleNumber({ target: { value: "8" } }); }
    if (key === "9") { this.handleNumber({ target: { value: "9" } }); }
    if (key === "0") { this.handleZero({ target: { value: "0" } }); }
    if (key === ",") { this.handleDecimal({ target: { value: "." } }); }
    if (key === ".") { this.handleMath({ target: { value: "." } }); }
    if (key === "+") { this.handleMath({ target: { value: "+" } }); }
    if (key === "-") { this.handleMath({ target: { value: "-" } }); }
    if (key === "*") { this.handleMath({ target: { value: "*" } }); }
    if (key === "/") { this.handleMath({ target: { value: "/" } }); }
    if (key === "*") { this.handleMath({ target: { value: "*" } }); }
    if (key === "=") { this.handleScore({ target: { value: "=" } }); }
    if (key === "Enter") { this.handleScore({ target: { value: "=" } }); }
    if (key === "c") { this.handleClear(); }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} math={this.state.math} secondDisplay={this.state.secondDisplay} operator={this.state.operator} time={this.state.time} />
        <div className="buttons-wrapper">
          <Button class="Button__btn" name="1" onClick={this.handleNumber} />
          <Button class="Button__btn" name="2" onClick={this.handleNumber} />
          <Button class="Button__btn" name="3" onClick={this.handleNumber} />
          <Button class="Button__btn" name="clear" onClick={this.handleClear} />
          {/* <Button class="Button__btn Button__btn--empty" name="." /> */}
          <Button class="Button__btn Button__btn--math" name="+" onClick={this.handleMath} />
          <Button class="Button__btn Button__btn--math" name="-" onClick={this.handleMath} />
          <Button class="Button__btn" name="4" onClick={this.handleNumber} />
          <Button class="Button__btn" name="5" onClick={this.handleNumber} />
          <Button class="Button__btn" name="6" onClick={this.handleNumber} />
          <Button class="Button__btn" name="." onClick={this.handleDecimal} />
          <Button class="Button__btn Button__btn--math" name="*" onClick={this.handleMath} />
          <Button class="Button__btn Button__btn--math" name="/" onClick={this.handleMath} />
          <Button class="Button__btn" name="7" onClick={this.handleNumber} />
          <Button class="Button__btn" name="8" onClick={this.handleNumber} />
          <Button class="Button__btn" name="9" onClick={this.handleNumber} />
          <Button class="Button__btn" name="0" onClick={this.handleZero} />
          <Button class="Button__btn Button__btn--score" name="=" onClick={this.handleScore} />
        </div>
      </div>
    );
  }
}

export default App;