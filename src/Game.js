import React, { Component } from "react";

import { GameEngine } from "react-game-engine";
import { Box } from "./components/Game/renderers";
import { MoveBox, RotateBox } from "./components/Game/systems";

export class Game extends Component {
  render() {
    return (
      <GameEngine
        style={{ width: 340, height: 600, backgroundColor: "#5ca08e" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: {
            class: "right",
            x: 75,
            y: 100,
            color: "blue",
            renderer: <Box />
          },
          box2: { class: "up", x: 75, y: 200, color: "red", renderer: <Box /> },
          box3: {
            class: "down",
            x: 75,
            y: 300,
            color: "pink",
            renderer: <Box />
          },
          box4: {
            class: "up",
            x: 175,
            y: 100,
            color: "yellow",
            renderer: <Box />
          },
          box5: {
            class: "up",
            x: 175,
            y: 200,
            color: "green",
            renderer: <Box />
          },
          box6: {
            class: "up",
            x: 175,
            y: 300,
            color: "orange",
            renderer: <Box />
          },
          box7: {
            class: "up",
            x: 275,
            y: 100,
            color: "purple",
            renderer: <Box />
          },
          box8: {
            class: "left",
            x: 275,
            y: 200,
            color: "brown",
            renderer: <Box />
          },
          box9: {
            class: "up",
            x: 275,
            y: 300,
            color: "gray",
            renderer: <Box />
          }
        }}
      ></GameEngine>
    );
  }
}

export default Game;
