import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: ""
    };
    this.click = this.click.bind(this);
  }

  click() {
    const input = document.getElementById("input").value;
    if (input === "") {
      return;
    }
    this.setState((state) => ({ message: input }));
  }

  render() {
    return (
      <div>
        <h2>Hello {this.state.name}</h2>
        <input
          id="input"
          type="text"
          placeholder="please enter the message"
        ></input>
        <div>
          <button onClick={this.click}>send</button>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
