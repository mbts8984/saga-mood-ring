import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_IMAGES'})
    this.props.dispatch({type: 'FETCH_TAGS'})
  }
  
  
  
  render() {
    return (
      <div className="App">
        
        <Feeling />
      </div>
    );
  }
}

export default connect()(App);
