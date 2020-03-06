import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel } from "../../store/levels/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";

const level1 = [
  [
    <L_TILE tileData={[null, true, true, null]} class="up" x={150} y={150} />,
    <L_TILE tileData={[true, true, null, null]} class="left" x={250} y={150} />,
    <L_TILE tileData={[true, true, null, null]} class="left" x={350} y={150} />
  ],
  [
    <L_TILE tileData={[null, true, true, null]} class="up" x={150} y={250} />,
    <L_TILE tileData={[true, true, null, null]} class="left" x={250} y={250} />,
    <I_TILE tileData={[true, null, true, null]} class="down" x={350} y={250} />
  ],
  [
    <L_TILE tileData={[true, null, null, true]} class="down" x={150} y={350} />,
    <I_TILE tileData={[null, true, null, true]} class="left" x={250} y={350} />,
    <L_TILE tileData={[true, true, null, null]} class="left" x={350} y={350} />
  ]
];

class Levels extends Component {
  render() {
    if (this.props.levels.currentLevel === 0) {
      this.props.startLevel(level1);
      //return level1;
    }
    return level1;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
