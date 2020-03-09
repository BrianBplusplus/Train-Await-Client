import React, { Component } from "react";
import { connect } from "react-redux";
import { startLevel, rotateTile } from "../../store/levels/action";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";

class Levels extends Component {
  getIndex = (tileData, tileId) => {
    console.log("--------------------");
    // Index finding
    this.props.levels.tiles.map(mappedRows => {
      mappedRows.map(mappedTile => {
        if (mappedTile.id === tileId) {
          console.log("array X = ", this.props.levels.tiles.indexOf(mappedRows));
          const x = this.props.levels.tiles.indexOf(mappedRows);
          console.log("array Y = ", mappedRows.indexOf(mappedTile));
          const y = mappedRows.indexOf(mappedTile);
          console.log("tileData using coordinates", this.props.levels.tiles[x][y]);
        }
      });
    });

    // Tile rotation
    console.log("Initial tileData", tileData);

    function rotateClockwise([up, right, down, left]) {
      return [left, up, right, down];
    }

    const newTileData = rotateClockwise(tileData);
    console.log("tile after rotating", newTileData);

    this.props.rotateTile(newTileData, 1, 1);
  };

  render() {
    const level1 = [
      [
        <L_TILE id={1} getIndex={this.getIndex} tileData={[null, true, true, null]} class="up" tileX={150} tileY={150} />,
        <L_TILE id={2} getIndex={this.getIndex} tileData={[true, true, null, null]} class="left" tileX={250} tileY={150} />,
        <L_TILE id={3} getIndex={this.getIndex} tileData={[true, true, null, null]} class="left" tileX={350} tileY={150} />
      ],
      [
        <L_TILE id={4} getIndex={this.getIndex} tileData={[null, true, true, null]} class="up" tileX={150} tileY={250} />,
        <L_TILE id={5} getIndex={this.getIndex} tileData={[true, true, null, null]} class="left" tileX={250} tileY={250} />,
        <I_TILE id={6} getIndex={this.getIndex} tileData={[true, null, true, null]} class="down" tileX={350} tileY={250} />
      ],
      [
        <L_TILE id={7} getIndex={this.getIndex} tileData={[true, null, null, true]} class="down" tileX={150} tileY={350} />,
        <I_TILE id={8} getIndex={this.getIndex} tileData={[null, true, null, true]} class="left" tileX={250} tileY={350} />,
        <L_TILE id={9} getIndex={this.getIndex} tileData={[true, true, null, null]} class="left" tileX={350} tileY={350} />
      ]
    ];

    if (this.props.levels.currentLevel === 0) {
      this.props.startLevel(level1);
      return level1;
    } else return level1;
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { startLevel, rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
