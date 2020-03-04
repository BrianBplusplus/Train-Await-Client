import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./components/Game/renderers";

export default class Levels extends Component {
  render() {
    return (entities = {
      //-- Notice that each entity has a unique id (required)
      //-- and a renderer property (optional). If no renderer
      //-- is supplied with the entity - it won't get displayed.
      box1: { x: 75, y: 100, color: "#e2d86f", renderer: <Box /> },
      box2: { x: 75, y: 200, color: "red", renderer: <Box /> },
      box3: { x: 75, y: 300, color: "red", renderer: <Box /> },
      box4: { x: 175, y: 100, color: "red", renderer: <Box /> },
      box5: { x: 175, y: 200, color: "red", renderer: <Box /> },
      box6: { x: 175, y: 300, color: "red", renderer: <Box /> },
      box7: { x: 275, y: 100, color: "red", renderer: <Box /> },
      box8: { x: 275, y: 200, color: "red", renderer: <Box /> },
      box9: { x: 275, y: 300, color: "red", renderer: <Box /> }
    });
  }
}
