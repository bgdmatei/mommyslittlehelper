import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Hero from "../images/hero-img.jpg"


class landing extends Component {
    render() {
        return (
            <div className="hero-banner" >
                <div className="hero-title">
                    <h1>Mommy's Little Helper</h1>
                    <p>Hello from landing</p>
                </div>
                <div className="hero-button">
                    <Button style={{ border: "1px solid grey" }} component={Link} to="signup">
                        Register
                    </Button>
                </div>
            </div>
        )
    }
}

export default landing
