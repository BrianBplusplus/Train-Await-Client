import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel } from "../../store/levels/action";
import { resetTrain } from "../../store/animation/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";

const level1 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" />,
    <I_TILE shape={"I"} id={2} tileData={[true, null, true, null]} class="up" />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" />
  ],
  [
    <L_TILE shape={"L"} id={4} tileData={[null, true, true, null]} class="up" />,
    <I_TILE shape={"I"} id={5} tileData={[true, null, true, null]} class="down" />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" />
  ],
  [
    <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} class="down" />,
    <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} class="left" />,
    <EXIT_TILE shape={"EXIT"} id={9} tileData={[true, null, null, true]} class="up" exit={true} />
  ]
];

const level2 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" />,
    <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} class="up" />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" />,
    <L_TILE shape={"L"} id={4} tileData={[true, true, null, null]} class="left" />
  ],
  [
    <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} class="up" />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" />,
    <I_TILE shape={"I"} id={7} tileData={[true, null, true, null]} class="down" />,
    <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} class="right" />
  ],
  [
    <L_TILE shape={"L"} id={9} tileData={[true, null, null, true]} class="down" />,
    <I_TILE shape={"I"} id={10} tileData={[null, true, null, true]} class="left" />,
    <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} class="left" />,
    <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} class="left" />
  ],
  [
    <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} class="up" />,
    <I_TILE shape={"I"} id={14} tileData={[null, true, null, true]} class="left" />,
    <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} class="down" />,
    <EXIT_TILE shape={"EXIT"} id={16} tileData={[true, null, null, true]} class="up" exit={true} />
  ]
];

const level3 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" />,
    <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} class="up" />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" />,
    <EXIT_TILE shape={"EXIT"} id={4} tileData={[true, null, null, true]} class="up" exit={true} />
  ],
  [
    <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} class="up" />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" />,
    <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} class="down" />,
    <L_TILE shape={"L"} id={8} tileData={[null, null, true, true]} class="right" />
  ],
  [
    <I_TILE shape={"I"} id={9} tileData={[null, true, null, true]} class="left" />,
    <L_TILE shape={"L"} id={10} tileData={[true, true, null, null]} class="left" />,
    <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} class="left" />,
    <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} class="left" />
  ],
  [
    <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} class="up" />,
    <L_TILE shape={"L"} id={14} tileData={[true, true, null, null]} class="left" />,
    <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} class="down" />,
    <L_TILE shape={"L"} id={16} tileData={[true, null, null, true]} class="down" />
  ]
];

class Levels extends Component {
  render() {
    const { currentLevel, rendered } = this.props.levels;

    if (currentLevel === 0 && !rendered) {
      this.props.startLevel(level1);
      this.props.resetTrain(level1[0].length);
    }

    if (currentLevel === 1 && !rendered) {
      this.props.startLevel(level2);
      this.props.resetTrain(level2[0].length);
    }

    if (currentLevel === 2 && !rendered) {
      this.props.startLevel(level3);
      this.props.resetTrain(level3[0].length);
    }

    return null;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel, resetTrain };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
