import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Rectangle from "../images/rectangle-rounded.svg";
import Mother from "../images/mother-baby.svg";

class landing extends Component {
  render() {
    return (
      <div className="hero-landing">
        <div className="hero-title">
          <h1>Mommy's Little Helper</h1>
          <p>
            Are you a new parent in search of new food recipes or tips on
            raising your child? Mommy's Little Helper lets you get in contact
            with other parents that are happy to share their experience.
          </p>
        </div>
        <div className="hero-button">
          <Button className="hero-button-register" component={Link} to="signup">
            Register
          </Button>
        </div>
        <div className="hero-logo">
          <img className="mother-logo" src={Mother} alt="mother and child" />
        </div>
        <img
          className="rectangle-logo"
          src={Rectangle}
          alt="rectangle background"
        />
      </div>
    );
  }
}

export default landing;
