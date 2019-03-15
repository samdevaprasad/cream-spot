import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Cream Tracker Leaderboard Future Spot
          </p>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
