import React from 'react';
import { hot } from 'react-hot-loader';

import Info from 'Components/Info';
import MainContent from 'Components/MainContent';
import Nav from 'Components/Nav';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <Info />
        <MainContent />
        <Nav />
      </div>
    );
  }
}

export default hot(module)(App);
