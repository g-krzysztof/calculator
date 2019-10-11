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

    let number = parseFloat(e.target.value);

    if (this.state.display === "0") {
      this.setState({
        display: number
      })
    } else {
      this.setState(prevState => ({
        display: prevState.display + number.toString()
      }))
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
    this.setState(prevState => ({
      display: "0",
      secondDisplay: prevState.display,
      math: "+",
    }))
  }

  handleScore = () => {
    if (this.state.math.length > 0) {
      this.setState(prevState => ({
        display: parseFloat(prevState.display) + parseFloat(prevState.secondDisplay),
        showResult: true,
      }))
    }
  }

  render() {
    if (this.state.showResult === false) {
      return (
        <div className="App">
          <Display display={this.state.display} />
          <div className="buttons-wrapper">
            <Button name="1" onClick={this.handleNumber} />
            <Button name="2" onClick={this.handleNumber} />
            <Button name="3" onClick={this.handleNumber} />
            <Button name="4" onClick={this.handleNumber} />
            <Button name="5" onClick={this.handleNumber} />
            <Button name="6" onClick={this.handleNumber} />
            <Button name="7" onClick={this.handleNumber} />
            <Button name="8" onClick={this.handleNumber} />
            <Button name="9" onClick={this.handleNumber} />
            <Button name="0" onClick={this.handleZero} />
            <Button name="clear" onClick={this.handleClear} />
            <Button name="=" onClick={this.handleScore} />
            <Button name="+" onClick={this.handleMath} />
            <Button name="-" onClick={this.handleMath} />
            <Button name="*" onClick={this.handleMath} />
            <Button name="/" onClick={this.handleMath} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Display display={this.state.display} />
          <div className="buttons-wrapper">
            <Button name="1" onClick={this.handleClear} />
            <Button name="2" onClick={this.handleClear} />
            <Button name="3" onClick={this.handleClear} />
            <Button name="4" onClick={this.handleClear} />
            <Button name="5" onClick={this.handleClear} />
            <Button name="6" onClick={this.handleClear} />
            <Button name="7" onClick={this.handleClear} />
            <Button name="8" onClick={this.handleClear} />
            <Button name="9" onClick={this.handleClear} />
            <Button name="0" onClick={this.handleClear} />
            <Button name="clear" onClick={this.handleClear} />
            <Button name="=" onClick={this.handleClear} />
            <Button name="+" onClick={this.handleClear} />
            <Button name="-" onClick={this.handleClear} />
            <Button name="*" onClick={this.handleClear} />
            <Button name="/" onClick={this.handleClear} />
          </div>
        </div>
      );
    }
  }
}

export default App;