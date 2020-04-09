import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteScream from "./DeleteScream";
import ScreamDialog from "./ScreamDialog";
import LikeButton from "./LikeButton";
import MediaQuery from "react-responsive";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Icons
import ChatIcon from "@material-ui/icons/Chat";

//Redux
import { connect } from "react-redux";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
  imageSmall: {
    minWidth: 100,
    height: 100,
    borderRadius: "50%",
    margin: "40px 0px 0px 10px",
  },
};

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;
    return (
      <Fragment>
        <MediaQuery maxDeviceWidth={1224}>
          <Card className={classes.card}>
            <CardMedia
              image={userImage}
              title="Profile image"
              className={classes.imageSmall}
            />

            <CardContent className={classes.content}>
              <Typography
                variant="h5"
                component={Link}
                to={`/users/${userHandle}`}
                color="secondary"
              >
                {userHandle}
              </Typography>
              {deleteButton}
              <Typography color="textSecondary" variant="body2">
                {dayjs(createdAt).fromNow()}
              </Typography>
              <Typography variant="body1">{body}</Typography>
              <LikeButton screamId={screamId} />
              <span>{likeCount} likes</span>
              <br />
              <MyButton tip="Comments">
                <ChatIcon color="primary" />
              </MyButton>

              <span>{commentCount} comments</span>
              <ScreamDialog
                screamId={screamId}
                userHandle={userHandle}
                openDialog={this.props.openDialog}
              />
            </CardContent>
          </Card>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1224}>
          <Card className={classes.card}>
            <CardMedia
              image={userImage}
              title="Profile image"
              className={classes.image}
            />

            <CardContent className={classes.content}>
              <Typography
                variant="h5"
                component={Link}
                to={`/users/${userHandle}`}
                color="secondary"
              >
                {userHandle}
              </Typography>
              {deleteButton}
              <Typography color="textSecondary" variant="body2">
                {dayjs(createdAt).fromNow()}
              </Typography>
              <Typography variant="body1">{body}</Typography>
              <LikeButton screamId={screamId} />
              <span>{likeCount} likes</span>
              <MyButton tip="Comments">
                <ChatIcon color="primary" />
              </MyButton>
              <span>{commentCount} comments</span>
              <ScreamDialog
                screamId={screamId}
                userHandle={userHandle}
                openDialog={this.props.openDialog}
              />
            </CardContent>
          </Card>
        </MediaQuery>
      </Fragment>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Scream));
