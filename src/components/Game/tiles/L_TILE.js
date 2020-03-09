import React, { Component } from "react";
import image from "../../../images/TrainTrackTest.jpeg";

export default class L_TILE extends Component {
  state = {
    class: this.props.class,
    tileData: this.props.tileData
  };

  handleClick = () => {
    this.props.rotateHandler(this.props.tileData, this.props.id);

    switch (this.state.class) {
      case "up":
        this.setState({
          class: "right"
        });
        break;

      case "right":
        this.setState({
          class: "down"
        });
        break;

      case "down":
        this.setState({
          class: "left"
        });
        break;

      case "left":
        this.setState({
          class: "up"
        });
        break;

      default:
        break;
    }
  };

  render() {
    const size = 90;
    const x = this.props.tileX - size / 2;
    const y = this.props.tileY - size / 2;

    return (
      <div
        className={this.state.class}
        onClick={this.handleClick}
        id={this.props.id}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y
        }}
      >
        <img className={this.state.class} src={image} alt="temporary" />
      </div>
    );
  }
}
