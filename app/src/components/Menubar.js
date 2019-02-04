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

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Favorite from '@material-ui/icons/Favorite';
import Face from '@material-ui/icons/Face';
import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';


const debounce = (func, delay) => { 
  let debounceTimer 
  return function() { 
      const context = this
      const args = arguments 
          clearTimeout(debounceTimer) 
              debounceTimer 
          = setTimeout(() => func.apply(context, args), delay) 
  } 
}  

const styles = theme => ({
  root: {
    width: '100%',
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

class Menubar extends React.Component {
  state = {
    showSidebar: false
  };

  toggleDrawer = status => {
    this.setState(prevState => {
      return {showSidebar: (status!==undefined?status:!prevState.showSidebar)}
    });
  }

  searchRedirect = text => {
    this.props.history.push("search?text="+text);
  }

  debouncedSearch = debounce(this.searchRedirect, 1000);

  render() {
    const { classes } = this.props;

    const drawerListMenu = [
      {
        name: 'Home',
        icon: <Home />,
        link: '/home',
      },{
        name: 'Profile',
        icon: <Face />,
        link: '/profile',
      },{
        name: 'Favorites',
        icon: <Favorite />,
        link: '/favorites',
      },
    ]
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
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Relax-O-Vision
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase onChange={(e) => {this.debouncedSearch(e.target.value)}}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput}}/>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Username
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={this.state.showSidebar} 
          style={{marginTop: '5vh'}} onClick={()=>{this.toggleDrawer(false)}}>
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
