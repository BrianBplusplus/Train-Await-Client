import React, { Component } from "react";
import { connect } from "react-redux";
import { rotateTile } from "../../store/levels/action";
import { playGame } from "./functions/playGame"; // TODO: Import function correctly

import Levels from "./Levels";
import L_TILE from "./tiles/L_TILE";

export class GameContainer extends Component {
  rotateHandler = (tileData, tileId) => {
    console.log("----- rotateHandler -----");
    this.props.levels.tiles.map(mappedRows => {
      mappedRows.map(mappedTile => {
        if (mappedTile.id === tileId) {
          const x = this.props.levels.tiles.indexOf(mappedRows);
          const y = mappedRows.indexOf(mappedTile);

          console.log("tile BEFORE", tileData);
          const rotateClockwise = ([up, right, down, left]) => {
            return [left, up, right, down];
          };

          const newTileData = rotateClockwise(tileData);
          console.log("tile AFTER", newTileData);

          this.props.rotateTile(newTileData, x, y);
          console.log("-------------------------");
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
                  rotateHandler={this.rotateHandler}
                />
              );
            })
          )}
        <button onClick={() => playGame(this.props.levels.tiles)}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
