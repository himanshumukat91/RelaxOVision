import React from 'react';
import { Redirect } from 'react-router';

class Success extends React.Component {
    render(){
        return (
            <Redirect to="/home"/>
        );
    }
}

export default Success;