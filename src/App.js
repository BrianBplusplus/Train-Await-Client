import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import MainMenuContainer from "./components/Interface/MainMenuContainer";
import Game from "./Game";

export class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MainMenuContainer} />
        <Route path="/game" exact component={Game} />
      </div>
    );
  }
}

export default App;
