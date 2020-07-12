import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-banner" >
                    <div className="hero-title">
                        <h1>Mommy's Little Helper</h1>
                        <p>Hello from landing</p>
                    </div>
                    <div className="hero-button">
                        <Button className="hero-button-register" component={Link} to="signup">
                            Register
                        </Button>
                    </div>
                </div>
                <div>
                    <h1>Hi</h1>
                </div>
            </div>
        )
    }
}

export default landing
