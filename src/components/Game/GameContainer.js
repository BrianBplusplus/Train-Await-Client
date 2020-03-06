import React, { Component } from "react";
import { connect } from "react-redux";

import Levels from "./Levels";

export class GameContainer extends Component {
  playGame = () => {
    console.log("play game has been pressed");
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        Hola
        <Levels />
        <button onClick={this.playGame}>Play!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ levels: state.levels });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
