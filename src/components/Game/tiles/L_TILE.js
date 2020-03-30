import React, { Component } from "react";
import image from "../../../images/L_TILE.jpg";

export default class L_TILE extends Component {
  handleClick = () => {
    this.props.rotateHandler(this.props.tileData, this.props.id, this.props.class);
  };

  render() {
    const size = 90;
    return (
      <div
        onClick={this.handleClick}
        className={"gameTile"}
        style={{
          width: size,
          height: size
        }}
      >
        <img className={this.props.class} src={image} alt="temporary" />
      </div>
    );
  }
}
