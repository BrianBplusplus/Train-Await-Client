import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import MainMenuContainer from "./components/Interface/MainMenuContainer";
import EndScreenContainer from "./components/Interface/EndScreenContainer";
import GameContainer from "./components/Game/GameContainer";

export class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MainMenuContainer} />
        <Route path="/game" exact component={GameContainer} />
        <Route path="/endscreen" exact component={EndScreenContainer} />
      </div>
    );
  }
}

export default App;
