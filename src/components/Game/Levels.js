import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel, rotateTile } from "../../store/levels/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";

class Levels extends Component {
  /*  getIndex = (tileData, tileId) => {
    console.log("--------------------");
    // Index finding
    this.props.levels.tiles.map(mappedRows => {
      mappedRows.map(mappedTile => {
        if (mappedTile.id === tileId) {
          const x = this.props.levels.tiles.indexOf(mappedRows);
          const y = mappedRows.indexOf(mappedTile);

          console.log("tile before rotating", tileData);

          function rotateClockwise([up, right, down, left]) {
            return [left, up, right, down];
          }

          const newTileData = rotateClockwise(tileData);
          console.log("tile after rotating", newTileData);

          this.props.rotateTile(newTileData, x, y);
        }
      });
    });
  };
*/
  render() {
    const level1 = [
      [
        <L_TILE shape={"L"} id={1} tileData={[null, true, true, null]} class="up" tileX={150} tileY={150} />,
        <L_TILE shape={"L"} id={2} tileData={[true, true, null, null]} class="left" tileX={250} tileY={150} />,
        <L_TILE shape={"L"} id={3} tileData={[true, true, null, null]} class="left" tileX={350} tileY={150} />
      ],
      [
        <L_TILE shape={"L"} id={4} tileData={[null, true, true, null]} class="up" tileX={150} tileY={250} />,
        <L_TILE shape={"L"} id={5} tileData={[true, true, null, null]} class="left" tileX={250} tileY={250} />,
        <I_TILE shape={"I"} id={6} tileData={[true, null, true, null]} class="down" tileX={350} tileY={250} />
      ],
      [
        <L_TILE shape={"L"} id={7} tileData={[true, null, null, true]} class="down" tileX={150} tileY={350} />,
        <I_TILE shape={"I"} id={8} tileData={[null, true, null, true]} class="left" tileX={250} tileY={350} />,
        <L_TILE shape={"L"} id={9} tileData={[true, true, null, null]} class="left" tileX={350} tileY={350} />
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
