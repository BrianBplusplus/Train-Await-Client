import React, { Component } from "react";

export default class I_TILE extends Component {
  state = {
    class: "up",
    tileData: [true, null, true, null]
  };

  handleClick = () => {
    function rotateClockwise([up, right, down, left]) {
      return [left, up, right, down];
    }

    console.log(
      "tileData after rotating",
      rotateClockwise(this.state.tileData)
    );

    const rotatedTileData = rotateClockwise(this.state.tileData);

    switch (this.state.class) {
      case "up":
        this.setState({
          class: "right",
          tileData: rotatedTileData
        });
        break;

      case "right":
        this.setState({
          class: "down",
          tileData: rotatedTileData
        });
        break;

      case "down":
        this.setState({
          class: "left",
          tileData: rotatedTileData
        });
        break;

      case "left":
        this.setState({
          class: "up",
          tileData: rotatedTileData
        });
        break;

      default:
        break;
    }
  };

  render() {
    const size = 90;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;

    return (
      <div
        className={this.state.class}
        onClick={this.handleClick}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y
        }}
      >
        <img
          className={this.state.class}
          src={this.props.image}
          alt="temporary"
        />
      </div>
    );
  }
}
