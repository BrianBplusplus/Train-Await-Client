import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 90;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const color = this.props.color;

    return (
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: color,
          left: x,
          top: y
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: size,
            height: size
          }}
        >
          <div className="rowOne">
            <div>X</div>
            <div>O</div>
            <div>X</div>
          </div>
          <div className="rowTwo">
            <div>X</div>
            <div>X</div>
          </div>
          <div className="rowTwo">
            <div>X</div>
            <div>O</div>
            <div>X</div>
          </div>
        </div>
      </div>
    );
  }
}

export { Box };
