import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class MainMenuContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          <span className="titleLeft">train</span> <span className="titleRight">await</span>
        </h1>
        <p>
          <span className="highlightText">How to Play:</span>
          <br></br>
          Rotate the tracks by clicking on them, once all the tracks are in place press <span className="highlightText">"Play!"</span> to make the
          train move
          <p>
            <span className="highlightText">Scoring:</span>
            <br></br>
            The longer the train rides the <span className="highlightText">higher</span> your score <br></br>
            The amount of times you rotate the train tracks <span className="highlightText">reduce</span> your score
          </p>
        </p>
        <p>
          <Link className="titleRight" to="/game">
            Play Game
          </Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer);
