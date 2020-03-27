import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel, rotateTile } from "../../store/levels/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";

//somecomponentdidupdate

class Levels extends Component {
  render() {
    const { currentLevel, rendered } = this.props.levels;
    const level1 = [
      [
        <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" tileX={50} tileY={150} />,
        <I_TILE shape={"I"} id={2} tileData={[true, null, true, null]} class="up" tileX={150} tileY={150} />,
        <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" tileX={250} tileY={150} />
      ],
      [
        <L_TILE shape={"L"} id={4} tileData={[null, true, true, null]} class="up" tileX={50} tileY={250} />,
        <I_TILE shape={"I"} id={5} tileData={[true, null, true, null]} class="down" tileX={150} tileY={250} />,
        <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" tileX={250} tileY={250} />
      ],
      [
        <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} class="down" tileX={50} tileY={350} />,
        <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} class="left" tileX={150} tileY={350} />,
        <EXIT_TILE shape={"EXIT"} id={9} tileData={[true, null, null, true]} class="up" tileX={250} tileY={350} exit={true} />
      ]
    ];

    const level2 = [
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

    const level3 = [
      [
        <L_TILE shape={"L"} id={1} tileData={[true, true, null, null]} class="left" tileX={50} tileY={150} />,
        <L_TILE shape={"L"} id={2} tileData={[null, true, true, null]} class="up" tileX={150} tileY={150} />,
        <L_TILE shape={"L"} id={3} tileData={[null, null, true, true]} class="right" tileX={250} tileY={150} />,
        <EXIT_TILE shape={"EXIT"} id={4} tileData={[true, null, null, true]} class="up" tileX={350} tileY={150} exit={true} />
      ],
      [
        <L_TILE shape={"L"} id={5} tileData={[null, true, true, null]} class="up" tileX={50} tileY={250} />,
        <L_TILE shape={"L"} id={6} tileData={[true, true, null, null]} class="left" tileX={150} tileY={250} />,
        <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} class="down" tileX={250} tileY={250} />,
        <L_TILE shape={"L"} id={8} tileData={[null, null, true, true]} class="right" tileX={350} tileY={250} />
      ],
      [
        <I_TILE shape={"I"} id={9} tileData={[null, true, null, true]} class="left" tileX={50} tileY={350} />,
        <L_TILE shape={"L"} id={10} tileData={[true, true, null, null]} class="left" tileX={150} tileY={350} />,
        <L_TILE shape={"L"} id={11} tileData={[true, true, null, null]} class="left" tileX={250} tileY={350} />,
        <I_TILE shape={"I"} id={12} tileData={[null, true, null, true]} class="left" tileX={350} tileY={350} />
      ],
      [
        <L_TILE shape={"L"} id={13} tileData={[null, true, true, null]} class="up" tileX={50} tileY={450} />,
        <L_TILE shape={"L"} id={14} tileData={[true, true, null, null]} class="left" tileX={150} tileY={450} />,
        <L_TILE shape={"L"} id={15} tileData={[true, null, null, true]} class="down" tileX={250} tileY={450} />,
        <L_TILE shape={"L"} id={16} tileData={[true, null, null, true]} class="down" tileX={350} tileY={450} />
      ]
    ];

    if (currentLevel === 0 && !rendered) {
      this.props.startLevel(level1);
    }

    if (currentLevel === 1 && !rendered) {
      this.props.startLevel(level2);
    }

    if (currentLevel === 2 && !rendered) {
      this.props.startLevel(level3);
    }

    return null;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel, rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
