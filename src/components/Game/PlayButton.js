import React, { Component } from "react";
import { connect } from "react-redux";

import { playGame } from "./functions/playGame";

export class PlayButton extends Component {
  render() {
    const { tiles } = this.props.levels;
    const { moving } = this.props.train;
    return (
      <div className={this.props.class}>
        {!moving ? (
          <button className="functionColor" onClick={() => playGame(tiles)}>
            play!()
          </button>
        ) : (
          <button className="functionColorInactive">play!()</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  levels: state.levels,
  train: state.train
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
