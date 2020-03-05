import React, { PureComponent } from "react";

class Tile extends PureComponent {
  render() {
    const size = 90;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;

    return (
      <div
        className={this.props.class}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y
        }}
      >
        <img
          className={this.props.class}
          src={this.props.image}
          alt="temporary"
        />
      </div>
    );
  }
}

export { Tile };
