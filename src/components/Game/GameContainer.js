import React, { Component } from "react";
import { connect } from "react-redux";

import Levels from "./Levels";

export class GameContainer extends Component {
  playGame = () => {
    console.log("play game has been pressed");
  };

  clickOnTile = () => {
    const x = 1;
    const y = 1;
    console.log("clicked on", x, y, this.props.levels.tiles[x][y]);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        Hola
        <Levels />
        <button onClick={this.clickOnTile}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
