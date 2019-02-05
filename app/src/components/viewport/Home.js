import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/StarBorder';
import { withRouter } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import Refresh from '@material-ui/icons/Refresh';
import Fab from '@material-ui/core/Fab';

import unsplashApi from '../../api/unsplash.js';
import firebaseApi from '../../api/firebase.js';


//Style
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    activeIcon: {
        color: 'red',
    },
    fab: {
        position: 'fixed',
        bottom: 0,
        margin: theme.spacing.unit * 2,
    },
});

//Class
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.favIds = [];
    }

    state = {
        tileData: []
    }

    getRandomPhotos = async () => {
        let photos = await unsplashApi.listPhotos();
        let photoData = photos.map(photo => {
            return ({
                id: photo.id,
                img: photo.urls.regular,
                title: photo.user.username,
                author: photo.user.username,
                featured: (photo.likes > 20 ? true : false),
            })
        });
        this.setState({ tileData: photoData });
    }


    // getUserFavorites = async () => {
    //     let favs = await firebaseApi.getFavorites();
    //     if (favs && favs.length)
    //         this.favIds = favs.map((item) => item.id);
    //     else
    //         this.favIds = [];
    // }

    componentDidMount() {
        // this.getUserFavorites();
        this.getRandomPhotos();
    }

    infoRedirectPage = (photo) => {
        this.props.history.push('/info?id=' + photo.id);
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <GridList cellHeight={400} spacing={1} className={this.props.classes.gridList}>
                    {this.state.tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title} onClick={(e) => { this.infoRedirectPage(tile) }} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton color='secondary' onClick={() => { firebaseApi.addToFavorites(tile) }}>
                                        <FavoriteIcon />
                                    </IconButton>}
                                actionPosition="left"
                                className={this.props.classes.titleBar} />
                        </GridListTile>
                    ))}
                </GridList>
                <Tooltip title="Refresh" aria-label="Refresh" enterDelay={1000} leaveDelay={500}>
                    <Fab color="primary" onClick={() => {this.getRandomPhotos()}}
                        className={this.props.classes.fab}>
                        <Refresh />
                    </Fab>
                </Tooltip>
            </div>
        );
    }

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));