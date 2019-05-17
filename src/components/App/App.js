import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_IMAGES'})
  }
  
  
  
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Feeling />
      </div>
    );
  }
}

export default connect()(App);
