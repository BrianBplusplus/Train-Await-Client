import React, { Component } from "react";

import image01 from "../../images/TrainTrackTest.jpeg";
import image02 from "../../images/TrainTrackTest2.jpeg";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";

export default class Levels extends Component {
  render() {
    return (
      <div>
        {[
          [
            <L_TILE key={1} id={1} x={150} y={150} image={image01} />,
            <L_TILE key={2} id={2} x={250} y={150} image={image01} />,
            <L_TILE key={3} id={3} x={350} y={150} image={image01} />
          ],
          [
            <L_TILE key={4} id={4} x={150} y={250} image={image01} />,
            <I_TILE key={5} id={5} x={250} y={250} image={image02} />,
            <L_TILE key={6} id={6} x={350} y={250} image={image01} />
          ],
          [
            <L_TILE key={7} id={7} x={150} y={350} image={image01} />,
            <L_TILE key={8} id={8} x={250} y={350} image={image01} />,
            <L_TILE key={9} id={9} x={350} y={350} image={image01} />
          ]
        ]}
      </div>
    );
  }
}
