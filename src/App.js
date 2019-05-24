import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Radium from 'radium';
import Header from './Components/NavComponent/Header'
import './App.css';
import BottomNav from './Components/FooterComponent/BottomNav';

class App extends React.Component{

  render() {
    return (
      <Router>
        <div>
        <Header />
        <BottomNav />
        </div>
      </Router>
    )
  }
}

export default Radium(App);
