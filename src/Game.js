import React, { Component } from "react";

import { GameEngine } from "react-game-engine";
import { Box } from "./components/Game/renderers";
import { MoveBox } from "./components/Game/systems";

export class Game extends Component {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "#5ca08e" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200, y: 200, color: "#e2d86f", renderer: <Box /> },
          box2: { x: 300, y: 300, color: "red", renderer: <Box /> }
        }}
      ></GameEngine>
    );
  }
}

export default Game;
