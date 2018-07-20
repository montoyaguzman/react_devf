import React, { Component } from "react";

class Saludo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <h1> {this.props.saludo} </h1>;
  }
}

export default Saludo;
