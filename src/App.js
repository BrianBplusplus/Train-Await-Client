import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import { GameEngine } from "react-game-engine";
import { Box } from "./components/renderers";
import { MoveBox } from "./components/systems";

export class App extends Component {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "#5ca08e" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200, y: 200, renderer: <Box /> }
        }}
      ></GameEngine>
    );
  }
}

export default App;
