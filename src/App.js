import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.click = this.click.bind(this);
  }

  data = [];

  boxStyle = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  };

  click(event) {
    let x = event.pageX;
    let y = event.pageY;
    let array = { x: x, y: y };
    this.data.push(array);
    this.setState({
      list: this.data
    });
  }

  drow(value) {
    let box = {
      position: "absolute",
      left: value.x - 5 + "px ",
      top: value.y - 5 + "px",
      width: "10px",
      height: "10px",
      backgroundColor: "red"
    };
    return <div style={box}></div>;
  }

  render() {
    return (
      <div>
        <p>いろんな場所をクリックしてください。</p>
        <div style={this.boxStyle} onClick={this.click}>
          {this.state.list.map((value) => this.drow(value))}
        </div>
      </div>
    );
  }
}

export default App;
