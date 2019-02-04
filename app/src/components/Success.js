import React from 'react';
import { Route, Redirect } from 'react-router';
import api from '../api/unsplash.js';

class Success extends React.Component {
    render(){
        let bearerCode = window.location.href.split('code=')[1]
        api.saveUserToken(bearerCode);

        return (
            <Redirect to="/home"/>
        );
    }
}

export default Success;