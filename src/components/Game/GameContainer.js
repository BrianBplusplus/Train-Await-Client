import React, { Component } from "react";
import { connect } from "react-redux";

import Levels from "./Levels";
import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";
import Train from "./Train";

import { rotateTile, nextLevel } from "../../store/levels/action";
import { resetTrain } from "../../store/animation/action";
import { playGame } from "./functions/playGame";
import Footer from "../Interface/Footer";

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

  render() {
    const { tiles, currentLevel } = this.props.levels;
    const { score } = this.props.score;
    const { train } = this.props;
    return (
      <div>
        <h1>
          <span className="titleLeft">train</span> <span className="titleRight">await</span>
        </h1>
        <p className="gameTopBar">
          <span className="variableColor">Level:</span> <span className="integerColor">{currentLevel}</span>{" "}
          <span className="variableColor">Lives:</span> <span className="integerColor">{3}</span> <span className="variableColor">Score:</span>{" "}
          <span className="integerColor">{score}</span>
        </p>

        <div>
          <Train className="train" moveTrain={this.moveTrain} x={train.x} y={train.y} />
          <Levels />
          {!tiles && <p>loading</p>}
          <div className="gameBoard">
            {tiles &&
              tiles.map((rows, index) => {
                return (
                  <div key={index} className="gameRow">
                    {rows.map(tile => {
                      if (tile.shape === "L") {
                        return <L_TILE key={tile.id} id={tile.id} tileData={tile.tileData} class={tile.class} rotateHandler={this.rotateHandler} />;
                      }
                      if (tile.shape === "I") {
                        return <I_TILE key={tile.id} id={tile.id} tileData={tile.tileData} class={tile.class} rotateHandler={this.rotateHandler} />;
                      }
                      if (tile.shape === "EXIT") {
                        return <EXIT_TILE key={tile.id} id={tile.id} tileData={tile.tileData} class={tile.class} tileExit={tile.exit} />;
                      }
                      return null;
                    })}
                  </div>
                );
              })}
            <div className="buttonsContainer">
              <button className="functionColor" id="playButton" onClick={() => playGame(tiles)}>
                play!()
              </button>
              {/* <button className="functionColor" id="nextLevelButton" onClick={() => this.props.nextLevel()}>
                nextLevel()
              </button> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels, train: state.train, score: state.score });

const mapDispatchToProps = { rotateTile, nextLevel, resetTrain };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
