import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="commentColor">{"// Made by Brian Nieuwenhuijzen with JavaScript, React and Redux"}</div>
        <div className="linkColor">
          <a href="https://www.linkedin.com/in/brian-nieuwenhuijzen/">
            {"<Link to = "} <FontAwesomeIcon icon={faLinkedin} /> {"LinkedIn />"}
          </a>
          <br class="mobile-break"></br>
          {"   "}
          <a href="https://github.com/BrianBplusplus ">
            {"<Link to = "} <FontAwesomeIcon icon={faGithub} />
            {" Github />"}
          </a>
        </div>
      </div>
    );
  }
}
