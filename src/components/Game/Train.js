import React, { Component } from "react";

export default class Train extends Component {
  render() {
    const size = 25;
    const x = this.props.x;
    const y = this.props.y;

    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          zIndex: 1,
          width: size,
          height: size,
          left: x,
          top: y
        }}
      />
    );
  }
}
