import React, { Component } from "react";
import { uuid } from "uuidv4";
import image from "../../../images/START_TILE.jpg";

export default class START_TILE extends Component {
  handleClick = () => {
    this.props.rotateHandler(this.props.tileData, this.props.id, this.props.class);
  };

  render() {
    const size = 90;
    const x = this.props.tileX - size / 2;
    const y = this.props.tileY - size / 2;

    return (
      <div
        onClick={this.handleClick}
        id={uuid()}
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
