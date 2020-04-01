import React, { Component } from "react";
import image from "../../../images/EMPTY_TILE.jpg";

export default class EMPTY_TILE extends Component {
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
