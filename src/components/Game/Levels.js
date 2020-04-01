import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel } from "../../store/levels/action";
import { resetTrain } from "../../store/animation/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";

const level1 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <I_TILE shape={"I"} id={2} tileData={[true, null, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />
  ],
  [
    <L_TILE shape={"L"} id={4} tileData={[null, true, true, null]} rotation={0} />,
    <I_TILE shape={"I"} id={5} tileData={[true, null, true, null]} rotation={180} />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />
  ],
  [
    <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} rotation={180} />,
    <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} rotation={270} />,
    <EXIT_TILE shape={"EXIT"} id={9} tileData={[true, null, null, true]} exit={true} />
  ]
];

const level2 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <I_TILE shape={"I"} id={2} tileData={[true, null, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={3} tileData={[null, true, true, null]} rotation={0} />
  ],
  [
    <I_TILE shape={"I"} id={4} tileData={[null, true, null, true]} rotation={90} />,
    <L_TILE shape={"L"} id={5} tileData={[true, null, null, true]} rotation={180} />,
    <L_TILE shape={"L"} id={6} tileData={[true, null, null, true]} rotation={180} />
  ],
  [
    <I_TILE shape={"I"} id={7} tileData={[true, null, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={8} tileData={[null, true, true, null]} rotation={0} />,
    <EXIT_TILE shape={"EXIT"} id={9} tileData={[true, null, null, true]} exit={true} />
  ]
];

const level3 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />,
    <L_TILE shape={"L"} id={4} tileData={[true, true, null, null]} rotation={270} />
  ],
  [
    <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />,
    <I_TILE shape={"I"} id={7} tileData={[true, null, true, null]} rotation={180} />,
    <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} rotation={90} />
  ],
  [
    <L_TILE shape={"L"} id={9} tileData={[true, null, null, true]} rotation={180} />,
    <I_TILE shape={"I"} id={10} tileData={[null, true, null, true]} rotation={270} />,
    <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} rotation={270} />,
    <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} rotation={270} />
  ],
  [
    <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} rotation={0} />,
    <I_TILE shape={"I"} id={14} tileData={[null, true, null, true]} rotation={270} />,
    <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} rotation={180} />,
    <EXIT_TILE shape={"EXIT"} id={16} tileData={[true, null, null, true]} rotation={0} exit={true} />
  ]
];

const level4 = [
  [
    <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />,
    <EXIT_TILE shape={"EXIT"} id={4} tileData={[true, null, null, true]} rotation={0} exit={true} />
  ],
  [
    <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />,
    <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} rotation={180} />,
    <L_TILE shape={"L"} id={8} tileData={[null, null, true, true]} rotation={90} />
  ],
  [
    <I_TILE shape={"I"} id={9} tileData={[null, true, null, true]} rotation={270} />,
    <L_TILE shape={"L"} id={10} tileData={[true, true, null, null]} rotation={270} />,
    <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} rotation={270} />,
    <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} rotation={270} />
  ],
  [
    <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} rotation={0} />,
    <L_TILE shape={"L"} id={14} tileData={[true, true, null, null]} rotation={270} />,
    <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} rotation={180} />,
    <L_TILE shape={"L"} id={16} tileData={[true, null, null, true]} rotation={180} />
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

    if (currentLevel === 3 && !rendered) {
      this.props.startLevel(level4);
      this.props.resetTrain(level4[0].length);
    }

    return null;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel, resetTrain };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
