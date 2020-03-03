import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class MainMenuContainer extends Component {
  render() {
    return (
      <div>
        <h1>Main menu</h1>
        <p>
          <Link to="/game">Play Game</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer);
