import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../Interface/Footer";
import Train from "./Train";
import PlayButton from "./PlayButton";

import L_TILE from "./tiles/L_TILE";
import I_TILE from "./tiles/I_TILE";
import EMPTY_TILE from "./tiles/EMPTY_TILE";
import EXIT_TILE from "./tiles/EXIT_TILE";

import { rotateTile, nextLevel } from "../../store/levels/action";
import { resetTrain } from "../../store/animation/action";
import { dispatchLevelToStore } from "./functions/levels";
import { rotateTileData, rotateTileImage } from "./functions/rotations";

export class GameContainer extends Component {
  rotateHandler = (tileData, tileId, tileRotation) => {
    console.log("----- rotateHandler -----");
    this.props.levels.tiles.forEach(rows => {
      rows.find(rowTile => {
        if (rowTile.id === tileId) {
          const x = this.props.levels.tiles.indexOf(rows);
          const y = rows.indexOf(rowTile);

          this.props.rotateTile(rotateTileData(tileData), x, y, rotateTileImage(tileRotation));
          console.log("-------------------------");
        }
        return null;
      });
    });
  };

  componentDidMount() {
    dispatchLevelToStore(0);
  }

  render() {
    const { tiles, currentLevel } = this.props.levels;
    const { score } = this.props.score;
    const { train } = this.props;
    return (
      <div>
        <h1>
          <span className="titleLeft">train</span> <span className="titleRight">await</span>
        </h1>
        <p>
          <span className="variableColor">Level:</span> <span className="integerColor">{currentLevel}</span>{" "}
          <span className="variableColor">Score:</span> <span className="integerColor">{score}</span>
        </p>

        <div>
          <Train className="train" moveTrain={this.moveTrain} x={train.x} y={train.y} />
          <PlayButton class="mobilePlayButton" />
          {!tiles && <p>loading</p>}
          <div className="gameBoard">
            {tiles &&
              tiles.map((rows, index) => {
                return (
                  <div key={index} className="gameRow">
                    {rows.map(tile => {
                      if (tile.shape === "L") {
                        return (
                          <L_TILE key={tile.id} id={tile.id} tileData={tile.tileData} rotation={tile.rotation} rotateHandler={this.rotateHandler} />
                        );
                      }
                      if (tile.shape === "I") {
                        return (
                          <I_TILE key={tile.id} id={tile.id} tileData={tile.tileData} rotation={tile.rotation} rotateHandler={this.rotateHandler} />
                        );
                      }
                      if (tile.shape === "EMPTY") {
                        return <EMPTY_TILE key={tile.id} id={tile.id} tileData={tile.tileData} />;
                      }

                      if (tile.shape === "EXIT") {
                        return <EXIT_TILE key={tile.id} id={tile.id} tileData={tile.tileData} tileExit={tile.exit} />;
                      }
                      return null;
                    })}
                  </div>
                );
              })}

            <PlayButton class="desktopPlayButton" />
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
