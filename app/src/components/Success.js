import React from 'react';
import { Route, Redirect } from 'react-router';
import api from '../api/unsplash.js';

class Success extends React.Component {
    render(){
        return (
            <Redirect to="/home"/>
        );
    }
}

export default Success;