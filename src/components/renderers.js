import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 50;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: "#e2d86f",
          left: x,
          top: y
        }}
      />
    );
  }
}

export { Box };
