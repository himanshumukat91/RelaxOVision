import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import firebaseApi from '../api/firebase.js';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/Search';
import Cancel from '@material-ui/icons/Cancel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Favorite from '@material-ui/icons/Favorite';
import Face from '@material-ui/icons/Face';
import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

//Helper functions
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

// Style
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
            minWidth: '50vh'
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center'
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    grow: {
        flexGrow: 1,
    },
});


//Class
class Menubar extends React.Component {
    state = {
        showSidebar: false,
        loggedIn: false,
        username: "User"
    };

    toggleDrawer = status => {
        this.setState(prevState => {
            return { showSidebar: (status !== undefined ? status : !prevState.showSidebar) }
        });
    }

    searchRedirect = text => {
        if (text.length)
            this.props.history.push("search?text=" + text);
        else
            this.props.history.push("home");
    }

    debouncedSearch = debounce(this.searchRedirect, 500);

    componentDidMount() {
        let scope = this;
        window.defaultApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                scope.setState({ loggedIn: true, username: user.displayName });
                // Hack
                window.firebaseUser = user;
            }
            else {
                scope.setState({ loggedIn: false, username: 'Guest' });
                firebaseApi.login();
            }
        });
    }

    render() {
        const { classes } = this.props;
        const drawerListMenu = [
            {
                name: 'Home',
                icon: <Home />,
                link: 'home',
            }, {
                name: 'Profile',
                icon: <Face />,
                link: '/profile',
            }, {
                name: 'Favorites',
                icon: <Favorite />,
                link: '/favorites',
            }];

        const sideList = (
            <div className={classes.list}>
                <List>
                    {drawerListMenu.map((item, index) => (
                        <React.Fragment>
                            <NavLink to={item.link}>
                                <ListItem button key={item.name}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </NavLink>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1em'}}>
                    {window.firebaseUser?window.firebaseUser.displayName:''}
                </div>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={this.toggleDrawer}
                            color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap
                            onClick={this.searchRedirect}>
                            Relax-O-Vision
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase onChange={(e) => { this.debouncedSearch(e.target.value) }}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }} />
                        </div>
                        <div className={classes.grow} />
                        {/* <div className={classes.sectionDesktop}> */}
                            {this.state.loggedIn
                                ? <React.Fragment>
                                    <IconButton color="inherit">
                                        <AccountCircle />
                                    </IconButton>
                                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                        {this.state.username}
                                    </Typography>
                                    <IconButton color="inherit" onClick={() => { firebaseApi.logout(); }}>
                                        <Cancel />
                                    </IconButton>
                                </React.Fragment>
                                : <div id="firebaseui-auth-container"></div>}
                        {/* </div> */}
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={this.state.showSidebar}
                    style={{ marginTop: '5vh' }} onClick={() => { this.toggleDrawer(false) }}>
                    <div tabIndex={0} role="button">
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

Menubar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Menubar));
