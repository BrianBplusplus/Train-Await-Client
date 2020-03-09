import React, { Component } from "react";
import { connect } from "react-redux";
import { rotateTile } from "../../store/levels/action";

import Levels from "./Levels";
import L_TILE from "./tiles/L_TILE";

export class GameContainer extends Component {
  playGame = () => {
    console.log("play game has been pressed");
  };

  getIndex = (tileData, tileId) => {
    console.log("------- getIndex ---------");
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
          console.log("--------------------------");
        }
        return null;
      });
      return null;
    });
  };

  render() {
    console.log("this.props on GameContainer.js", this.props.levels.tiles);
    return (
      <div>
        Hola
        <Levels />
        {!this.props.levels.tiles && <p>loading</p>}
        {this.props.levels.tiles &&
          this.props.levels.tiles.map(rows =>
            rows.map(tile => {
              return (
                <L_TILE
                  key={tile.id}
                  id={tile.id}
                  tileData={tile.tileData}
                  class={tile.class}
                  tileX={tile.tileX}
                  tileY={tile.tileY}
                  getIndex={this.getIndex}
                />
              );
            })
          )}
        <button onClick={this.playGame}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
