import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel, rotateTile } from "../../store/levels/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";

//somecomponentdidupdate

class Levels extends Component {
  render() {
    const level1 = [
      [
        <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" tileX={50} tileY={150} />,
        <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} class="up" tileX={150} tileY={150} />,
        <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" tileX={250} tileY={150} />,
        <L_TILE shape={"L"} id={4} tileData={[true, true, null, null]} class="left" tileX={350} tileY={150} />
      ],
      [
        <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} class="up" tileX={50} tileY={250} />,
        <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" tileX={150} tileY={250} />,
        <I_TILE shape={"I"} id={7} tileData={[true, null, true, null]} class="down" tileX={250} tileY={250} />,
        <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} class="right" tileX={350} tileY={250} />
      ],
      [
        <L_TILE shape={"L"} id={9} tileData={[true, null, null, true]} class="down" tileX={50} tileY={350} />,
        <I_TILE shape={"I"} id={10} tileData={[null, true, null, true]} class="left" tileX={150} tileY={350} />,
        <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} class="left" tileX={250} tileY={350} />,
        <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} class="left" tileX={350} tileY={350} />
      ],
      [
        <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} class="up" tileX={50} tileY={450} />,
        <I_TILE shape={"I"} id={14} tileData={[null, true, null, true]} class="left" tileX={150} tileY={450} />,
        <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} class="down" tileX={250} tileY={450} />,
        <EXIT_TILE shape={"EXIT"} id={16} tileData={[true, null, null, true]} class="up" tileX={350} tileY={450} exit={true} />
      ]
    ];

    if (this.props.levels.currentLevel === 0) {
      this.props.startLevel(level1);
    }

    return null;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel, rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
