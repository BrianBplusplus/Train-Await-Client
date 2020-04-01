import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export class MainMenuContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          <span className="titleLeft">train</span> <span className="titleRight">await</span>
        </h1>
        <span>
          <p>
            <span className="variableColor">How to Play:</span>
            <br></br>
            Rotate the tracks by clicking on them, once all the tracks are in place press <span className="functionColorMainMenu">"play!()"</span> to
            make the train move
          </p>
          <p>
            <span className="variableColor">Scoring:</span>
            <br></br>
            The longer the train rides the <span className="variableColor">higher</span> your <span className="integerColor">score</span> <br></br>
            The amount of times you rotate the train tracks <span className="variableColor">reduces</span> your{" "}
            <span className="integerColor">score</span>
          </p>
        </span>

        <Link className="functionColor" to="/game">
          playGame()
        </Link>

        <Link className="functionColorMobile" to="/game">
          playGame()
        </Link>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer);
