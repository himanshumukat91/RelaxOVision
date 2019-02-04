import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LikeIcon from '@material-ui/icons/ThumbUp';

const styles = theme => ({
  card: {
    width: '70vw',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PhotoDetail extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    const photoDetails = {
        "id": "BGD6lA_0kGs",
        "created_at": "2018-11-21T17:18:39-05:00",
        "updated_at": "2019-02-03T11:01:34-05:00",
        "width": 4480,
        "height": 6720,
        "color": "#0A1719",
        "description": "man sitting on concrete block",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
            "full": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
            "regular": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
            "small": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ",
            "thumb": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0NDA1fQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/BGD6lA_0kGs",
            "html": "https://unsplash.com/photos/BGD6lA_0kGs",
            "download": "https://unsplash.com/photos/BGD6lA_0kGs/download",
            "download_location": "https://api.unsplash.com/photos/BGD6lA_0kGs/download"
        },
        "categories": [],
        "sponsored": false,
        "sponsored_by": null,
        "sponsored_impressions_id": null,
        "likes": 100,
        "liked_by_user": false,
        "current_user_collections": [],
        "user": {
            "id": "iZHIQRFvbeI",
            "updated_at": "2019-02-03T13:42:46-05:00",
            "username": "kalvisuals",
            "name": "Kyle Loftus",
            "first_name": "Kyle",
            "last_name": "Loftus",
            "twitter_username": "kalvisuals",
            "portfolio_url": "https://www.kalvisuals.com",
            "bio": "The names Kal and visuals is the game, my passion is creating superior media content that inspires positive change. I live to create. I'm addicted to my craft and find myself never leaving the office. The world is my office. ",
            "location": "Orlando, FL",
            "links": {
                "self": "https://api.unsplash.com/users/kalvisuals",
                "html": "https://unsplash.com/@kalvisuals",
                "photos": "https://api.unsplash.com/users/kalvisuals/photos",
                "likes": "https://api.unsplash.com/users/kalvisuals/likes",
                "portfolio": "https://api.unsplash.com/users/kalvisuals/portfolio",
                "following": "https://api.unsplash.com/users/kalvisuals/following",
                "followers": "https://api.unsplash.com/users/kalvisuals/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1548644344578-830628df1eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "kalvisuals",
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 271,
            "accepted_tos": true
        }
    };

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {photoDetails.user.username}
            </Avatar>
            }
          title={photoDetails.user.username}
          subheader={new Date(photoDetails.updated_at).toDateString()}/>
        <CardMedia
          className={classes.media}
          image={photoDetails.urls.full}
          title={photoDetails.user.username}/>
        <CardActions className={classes.actions} disableActionSpacing>
            <div className="flex-center">
                <IconButton aria-label="Like" style={{marginRight: '1em'}}>
                    <LikeIcon/> 
                </IconButton>
                {photoDetails.likes}
            </div>
            <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
            </IconButton>
        </CardActions>
        <CardContent>
          <Typography component="p" gutterBottom align="left">
            {photoDetails.description || photoDetails.user.bio}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

PhotoDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoDetail);
