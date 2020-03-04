import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 90;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const color = this.props.color;

    return (
      <div
        className={this.props.class}
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: color,
          left: x,
          top: y
        }}
      >
        Hola
      </div>
    );
  }
}

export { Box };
