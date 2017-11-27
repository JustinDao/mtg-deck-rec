import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderBar from './HeaderBar'
import MTGCard from './MTGCard';

import AppBar from 'material-ui/AppBar';

const styles = {
  main: {
    margin: "0 20px",
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <br />
        <div style={styles.main}>
          <MTGCard />
        </div>
      </div>
    );
  }
}

export default App;
