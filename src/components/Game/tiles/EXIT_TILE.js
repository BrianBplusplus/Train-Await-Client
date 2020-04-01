import React, { Component } from "react";
import image from "../../../images/EXIT_TILE.jpg";

export default class EXIT_TILE extends Component {
  render() {
    const size = 75;
    return (
      <div
        onClick={this.handleClick}
        className={"gameTile"}
        style={{
          width: size,
          height: size
        }}
      >
        <img className={"tileImage"} src={image} alt="gameTile" />
      </div>
    );
  }
}
