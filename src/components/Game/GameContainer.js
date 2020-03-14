import React, { Component } from "react";
import { connect } from "react-redux";

import Levels from "./Levels";
import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import Train from "./Train";

import { rotateTile } from "../../store/levels/action";
import { playGame } from "./functions/playGame";

export class GameContainer extends Component {
  rotateHandler = (tileData, tileId, tileClass) => {
    console.log("----- rotateHandler -----");
    this.props.levels.tiles.map(mappedRows => {
      mappedRows.map(mappedTile => {
        if (mappedTile.id === tileId) {
          const x = this.props.levels.tiles.indexOf(mappedRows);
          const y = mappedRows.indexOf(mappedTile);

          console.log("tile BEFORE", tileData, tileClass);
          const rotateClockwise = ([up, right, down, left]) => {
            return [left, up, right, down];
          };

          const rotateTileClass = tileClass => {
            if (tileClass === "up") {
              return "right";
            } else if (tileClass === "right") {
              return "down";
            } else if (tileClass === "down") {
              return "left";
            } else if (tileClass === "left") {
              return "up";
            }
          };

          const newTileData = rotateClockwise(tileData);
          const newTileClass = rotateTileClass(tileClass);
          console.log("tile AFTER", newTileData, newTileClass);

          this.props.rotateTile(newTileData, x, y, newTileClass);
          console.log("-------------------------");
        }
        return null;
      });
      return null;
    });
  };

  moveTrain = () => {
    console.log("moveTrain triggered");
    console.log("this.x", Train);
  };

  render() {
    const { tiles } = this.props.levels;
    console.log("this.props on GameContainer.js", tiles);
    return (
      <div>
        Hola
        <Train moveTrain={this.moveTrain} x={135} y={90} />
        <Levels />
        {!tiles && <p>loading</p>}
        {tiles &&
          tiles.map(rows =>
            rows.map(tile => {
              if (tile.shape === "L") {
                return (
                  <L_TILE
                    key={tile.id}
                    id={tile.id}
                    tileData={tile.tileData}
                    class={tile.class}
                    tileX={tile.tileX}
                    tileY={tile.tileY}
                    tileExit={tile.exit}
                    rotateHandler={this.rotateHandler}
                  />
                );
              }
              if (tile.shape === "I") {
                return (
                  <I_TILE
                    key={tile.id}
                    id={tile.id}
                    tileData={tile.tileData}
                    class={tile.class}
                    tileX={tile.tileX}
                    tileY={tile.tileY}
                    tileExit={tile.exit}
                    rotateHandler={this.rotateHandler}
                  />
                );
              }
            })
          )}
        <button onClick={() => playGame(this.props.levels.tiles)}>Play!</button>
        <button onClick={() => this.moveTrain()}>moveTrain()</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
