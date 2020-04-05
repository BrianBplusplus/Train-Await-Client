import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { returnToMainMenu } from "../../store/score/action";

export class EndScreenContainer extends Component {
  sendToMainMenu = () => {
    this.props.returnToMainMenu();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>
          <span className="titleLeft">train</span> <span className="titleRight">await</span>
        </h1>
        <h2 className="parameterColor">
          Your total <span className="variableColor">score</span> is
        </h2>
        <div className="integerColor" id="endScreenScore">
          {this.props.score.score}
        </div>
        <p className="stringColor">
          "Thank you for playing my game! Currently i'm looking for new developer opportunities" <br></br> <br></br>
          `Feel free to contact me via my <br className="mobile-break"></br>
          <span className="variableColor">${"{"}</span>
          <a className="parameterColor" href="https://www.linkedin.com/in/brian-nieuwenhuijzen/">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
          </a>
          <span className="variableColor">{"}"}</span>
          <br className="mobile-break"></br>
          <br></br> or send an E-Mail directly at <br className="mobile-break"></br>
          <span className="variableColor">${"{"}</span>
          <a className="parameterColor" href="mailto:brian@nieuwenhuijzen.net">
            {" "}
            brian@nieuwenhuijzen.net{" "}
          </a>
          <span className="variableColor">{"}"}</span>`<br></br>
          <br></br>
          `Interested in the code? check it out on{" "}
          <a className="parameterColor" href="https://github.com/BrianBplusplus/Train-Await-Client">
            <span className="variableColor">${"{"}</span> <FontAwesomeIcon icon={faGithub} /> Github{" "}
          </a>
          <span className="variableColor">{"}"}</span>`
        </p>
        <button onClick={() => this.sendToMainMenu()} className="functionColor">
          mainMenu()
        </button>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ score: state.score });

const mapDispatchToProps = { returnToMainMenu };

export default connect(mapStateToProps, mapDispatchToProps)(EndScreenContainer);
