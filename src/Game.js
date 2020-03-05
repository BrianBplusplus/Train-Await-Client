import React, { Component } from "react";

import { GameEngine } from "react-game-engine";
import { Box } from "./components/Game/renderers";
import { RotateBox } from "./components/Game/systems";
import image01 from "./images/TrainTrackTest.jpeg";

export class Game extends Component {
  render() {
    return (
      <GameEngine
        style={{ width: 340, height: 600, backgroundColor: "#5ca08e" }}
        systems={[RotateBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: {
            class: "right",
            x: 75,
            y: 100,
            image: image01,
            renderer: <Box />
          },
          box2: {
            class: "up",
            x: 75,
            y: 200,
            image: image01,
            renderer: <Box />
          },
          box3: {
            class: "down",
            x: 75,
            y: 300,
            image: image01,
            renderer: <Box />
          },
          box4: {
            class: "up",
            x: 175,
            y: 100,
            image: image01,
            renderer: <Box />
          },
          box5: {
            class: "up",
            x: 175,
            y: 200,
            image: image01,
            renderer: <Box />
          },
          box6: {
            class: "up",
            x: 175,
            y: 300,
            image: image01,
            renderer: <Box />
          },
          box7: {
            class: "up",
            x: 275,
            y: 100,
            image: image01,
            renderer: <Box />
          },
          box8: {
            class: "left",
            x: 275,
            y: 200,
            image: image01,
            renderer: <Box />
          },
          box9: {
            class: "up",
            x: 275,
            y: 300,
            image: image01,
            renderer: <Box />
          }
        }}
      ></GameEngine>
    );
  }
}

export default Game;
