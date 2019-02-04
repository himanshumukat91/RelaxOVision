import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menubar from './components/Menubar.js';
import Home from './components/viewport/Home.js';
import Details from './components/viewport/Details.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Menubar/>
          </header>
          <div id="viewportContainer" className="viewport">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={_ => <Home />} />
            <Route path="/details" component={_ => <Details />} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
