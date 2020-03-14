import React, { Component } from "react";
import image from "../../../images/TrainTrackTest.jpeg";

export default class L_TILE extends Component {
  handleClick = () => {
    this.props.rotateHandler(this.props.tileData, this.props.id, this.props.class);
  };

  render() {
    const size = 90;
    const x = this.props.tileX - size / 2;
    const y = this.props.tileY - size / 2;
    let rotation = 90;

    return (
      <div
        onClick={this.handleClick}
        id={this.props.id}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y
          // transform: [{ rotate: `${rotation}deg` }]
        }}
      >
        <img className={this.props.class} src={image} alt="temporary" />
      </div>
    );
  }
}
