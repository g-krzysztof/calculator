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

  handleClear = () => {
    this.setState({
      display: "0",
      secondDisplay: "",
      math: "",
      showResult: false
    })
  };

  render() {
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
          <Button name="0" onClick={this.handleNumber} />
          <Button name="clear" onClick={this.handleClear} />
          <Button name="=" onClick={this.handleClick} />
          <Button name="+" onClick={this.handleClick} />
          <Button name="-" onClick={this.handleClick} />
          <Button name="*" onClick={this.handleClick} />
          <Button name="/" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;