import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menubar from './components/Menubar.js';
import Home from './components/viewport/Home.js';
import Info from './components/viewport/Info.js';
import Search from './components/viewport/Search.js';
import Profile from './components/viewport/Profile.js';
import Favorites from './components/viewport/Favorites.js';
import Success from './components/Success.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Menubar/>
          </header>
          <div id="viewportContainer" className="viewport">
            <ToastContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/info" component={Info} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/favorites" component={Favorites} />
              <Route exact path="/success" component={Success} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
