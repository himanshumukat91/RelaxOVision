import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class Profile extends React.Component {
    render() {
        return <div style={{ marginTop: '50px' }}>
        {window.firebaseUser 
            ?<React.Fragment>
                <Typography className={this.props.classes.card} component="p" gutterBottom align="left">
                    {window.firebaseUser.displayName}
                </Typography>
                <Typography className={this.props.classes.card} component="p" gutterBottom align="left">
                    {window.firebaseUser.email}
                </Typography>
                <Typography className={this.props.classes.card} component="p" gutterBottom align="left"
                    style={{textAlign: 'center', marginTop: '2em'}}>
                    We do not need more of you and you know yourself enough. Lets explore other things! ;)
                </Typography>
            </React.Fragment>
            :<Typography className={this.props.classes.card} component="p" gutterBottom align="left">
                Please Login 
            </Typography>}
        </div>;
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);



