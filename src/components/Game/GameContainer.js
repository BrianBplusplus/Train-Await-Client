import React, { Component } from "react";
import { connect } from "react-redux";
import { rotateTile } from "../../store/levels/action";
// import { playGame } from "./functions/playGame"; TODO: Import function correctly

import Levels from "./Levels";
import L_TILE from "./tiles/L_TILE";

export class GameContainer extends Component {
  playGame = () => {
    const tiles = this.props.levels.tiles;

    let currentTileY = 0;
    let currentTileX = 0;
    let entry = 0;
    let exit = 0;
    let finishLevel = false;

    const playGameNextTile = (y, x, entry) => {
      console.log("------ next tile ------");
      console.log("x", x, "y", y, "entry", entry);
      console.log("next tile tileId", tiles[y][x].id);
      if (entry === 0) {
        console.log("entered from the Top");
      } else if (entry === 1) {
        console.log("entered from the Right");
      } else if (entry === 2) {
        console.log("entered from the Bottom");
      } else if (entry === 3 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Left");
      } else {
        console.log("you have crashed!");
      }
    };

    console.log("------ playGame --------");
    console.log("starting top left on tileId", tiles[currentTileX][currentTileY].id);

    if (tiles[currentTileY][currentTileX].tileData[0] === true) {
      console.log("You have entered from the Top");
      entry = 0;

      if (tiles[currentTileY][currentTileX].tileData[0] === true && entry !== 0) {
        console.log("And exited from the Top");
      }

      if (tiles[currentTileY][currentTileX].tileData[1] === true && entry !== 1) {
        console.log("And exited from the Right");
        const nextTileY = currentTileY;
        const nextTileX = currentTileX + 1;
        const nextEntry = 3;

        playGameNextTile(nextTileY, nextTileX, nextEntry);
      }

      if (tiles[currentTileY][currentTileX].tileData[2] === true && entry !== 2) {
        console.log("And exited from the Bottom");
      }
      if (tiles[currentTileY][currentTileX].tileData[3] === true && entry !== 3) {
        console.log("And exited from the Left");
      }
    } else {
      console.log("You have crashed");
    }
  };

  rotateHandler = (tileData, tileId) => {
    console.log("----- rotateHandler -----");
    this.props.levels.tiles.map(mappedRows => {
      mappedRows.map(mappedTile => {
        if (mappedTile.id === tileId) {
          const x = this.props.levels.tiles.indexOf(mappedRows);
          const y = mappedRows.indexOf(mappedTile);

          console.log("tile BEFORE", tileData);
          function rotateClockwise([up, right, down, left]) {
            return [left, up, right, down];
          }

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
        <button onClick={this.playGame}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = { rotateTile };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
