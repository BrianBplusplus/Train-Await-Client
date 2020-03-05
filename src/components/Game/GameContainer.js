import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";

import image01 from "../../images/TrainTrackTest.jpeg";

export class GameContainer extends Component {
  render() {
    return (
      <div>
        Hola
        <Tile id={1} x={150} y={150} image={image01} />
        <Tile id={2} x={250} y={150} image={image01} />
        <Tile id={3} x={350} y={150} image={image01} />
        <Tile id={4} x={150} y={250} image={image01} />
        <Tile id={5} x={250} y={250} image={image01} />
        <Tile id={6} x={350} y={250} image={image01} />
        <Tile id={7} x={150} y={350} image={image01} />
        <Tile id={8} x={250} y={350} image={image01} />
        <Tile id={9} x={350} y={350} image={image01} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
