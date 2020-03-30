import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="commentColor">{"// Made by Brian Nieuwenhuijzen"}</div>
        <div className="linkColor">
          <a href="https://github.com/BrianBplusplus">{"<Link to = Github />"}</a>{" "}
          <a href="https://www.linkedin.com/in/brian-nieuwenhuijzen/">{"<Link to = LinkedIn />"}</a>
        </div>
      </div>
    );
  }
}
