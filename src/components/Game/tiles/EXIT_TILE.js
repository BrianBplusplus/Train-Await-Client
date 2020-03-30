import React, { Component } from "react";
import image from "../../../images/EXIT_TILE.jpg";

export default class EXIT_TILE extends Component {
  render() {
    const size = 90;
    const x = this.props.tileX - size / 2;
    const y = this.props.tileY - size / 2;

    return (
      <div
        onClick={this.handleClick}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y
        }}
      >
        <img className={this.props.class} src={image} alt="temporary" />
      </div>
    );
  }
}
