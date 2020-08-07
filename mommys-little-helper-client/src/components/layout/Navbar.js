import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";
import Notifications from "./Notifications";
// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icons
import HomeIcon from "@material-ui/icons/Home";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {authenticated ? (
          <AppBar>
            <Toolbar className="nav-container">
              <Fragment>
                <PostScream />
                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                  <Notifications />
                </Link>
              </Fragment>
            </Toolbar>
          </AppBar>
        ) : (
          <div>
            <Toolbar className="nav-landing">
              <Fragment>
                <Button
                  style={{ color: "#7A74DE" }}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  style={{ color: "#7A74DE" }}
                  component={Link}
                  to="signup"
                >
                  Sign up
                </Button>
              </Fragment>
            </Toolbar>
          </div>
        )}
      </div>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
