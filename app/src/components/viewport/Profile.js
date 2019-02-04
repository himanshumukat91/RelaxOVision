import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Profile extends React.Component {
    render() {
        return <div style={{ marginTop: '50px' }}>{window.firebaseUser ? window.firebaseUser.displayName : 'PleaseLogin'}</div>;
    }
}

export default withStyles(styles)(Profile);



