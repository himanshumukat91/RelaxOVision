import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LikeIcon from '@material-ui/icons/ThumbUp';

import unsplashApi from '../../api/unsplash.js';
import firebaseApi from '../../api/firebase.js';

//style
const styles = theme => ({
    card: {
        width: '70vw',
        minWidth: '1024px'
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


//Class
class Info extends React.Component {
    state = {};

    getPhotoDetails = async () => {
        let url = window.location.href;
        //Hacky way of getting URL query params as I know there will be only 1 param. Need to use url parse module
        let photoID = url.split('?')[1].split('=')[1];

        let photoDetails = await unsplashApi.getPhoto(photoID);
        this.setState({ photoDetails: photoDetails });
    }

    componentDidMount() {
        this.getPhotoDetails();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.state.photoDetails
                    ? <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {this.state.photoDetails.user.username}
                                </Avatar>
                            }
                            title={this.state.photoDetails.user.username}
                            subheader={new Date(this.state.photoDetails.updated_at).toDateString()} />
                        <CardMedia
                            className={classes.media}
                            image={this.state.photoDetails.urls.full}
                            title={this.state.photoDetails.user.username} />
                        <CardActions className={classes.actions} disableActionSpacing>
                            <div className="flex-center">
                                <IconButton aria-label="Like" disabled={false} style={{ marginRight: '0.5em' }}>
                                    <LikeIcon />
                                </IconButton>
                                {this.state.photoDetails.likes}
                            </div>
                            <IconButton onClick={() => { firebaseApi.addToFavorites(this.state.photoDetails) }} aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                        <CardContent>
                            <Typography component="p" gutterBottom align="left">
                                {this.state.photoDetails.description || this.state.photoDetails.user.bio}
                            </Typography>
                        </CardContent>
                    </Card>
                    : null}
            </div>
        );
    }
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);
