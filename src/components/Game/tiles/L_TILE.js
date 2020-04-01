import React, { Component } from "react";
import image from "../../../images/L_TILE.jpg";

export default class L_TILE extends Component {
  handleClick = () => {
    this.props.rotateHandler(this.props.tileData, this.props.id, this.props.rotation);
  };

  render() {
    const size = 75;
    return (
      <div
        onClick={this.handleClick}
        className={"gameTile"}
        style={{
          width: size,
          height: size,
          transform: `rotate(${this.props.rotation}deg)`,
          transition: "transform 0.3s ease"
        }}
      >
        <img className={"tileImage"} src={image} alt="gameTile" />
      </div>
    );
  }
}
