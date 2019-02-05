import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/StarBorder';
import { withRouter } from 'react-router-dom';

import api from '../../api/unsplash.js';
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
});


//Class
class Search extends React.Component {
    state = {
        tileData: []
    }

    getSearchedPhotos = async () => {
        let url = window.location.href;
        //Hacky way of getting URL query params as I know there will be only 1 param. Need to use url parse module
        let searchText = url.split('?')[1].split('=')[1];
        let photos = await api.searchPhotos(searchText);

        let photoData = photos.map(photo => {
            return ({
                id: photo.id,
                img: photo.urls.regular,
                title: photo.user.username,
                author: photo.user.username,
                featured: (photo.likes > 100 ? true : false),
            })
        });
        this.setState({ tileData: photoData });
    }

    infoRedirectPage = (photo) => {
        this.props.history.push('/info?id=' + photo.id);
    }

    render() {
        this.getSearchedPhotos();

        return (
            <div className={this.props.classes.root}>
                <GridList cellHeight={400} spacing={1} className={this.props.classes.gridList}>
                    {this.state.tileData.length
                    ?this.state.tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title}  onClick={(e) => { this.infoRedirectPage(tile) }} />
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
                    ))
                    : <div style={{marginTop: '50px'}}>Not found</div>}
                </GridList>
            </div>
        );
    }

}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Search));
