import "./styles.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    num: 0
  };

  aumenta = () => {
    if (this.state.num < 10) {
      this.setState({
        num: this.state.num + 1
      });
    }
  };

  diminui = () => {
    if (this.state.num > 0) {
      this.setState({
        num: this.state.num - 1
      });
    }
  };

  zera = () => {
    this.setState({
      num: 0
    });
  };
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.num}</h2>
        <div>
          <button Onclick={this.aumenta}>+</button>
          <button Onclick={this.diminui}>-</button>
          <button Onclick={this.zera}>Zerar</button>
        </div>
      </div>
    );
  }
}

export default App;
