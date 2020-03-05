import React, { Component } from "react";
import { connect } from "react-redux";

import Levels from "./Levels";

export class GameContainer extends Component {
  render() {
    return (
      <div>
        Hola
        <Levels />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
