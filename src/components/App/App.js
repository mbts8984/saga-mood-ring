import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  

  
  
  
  render() {
    return (
      <div className="App">
        
        <Feeling />
      </div>
    );
  }
}

export default connect()(App);
