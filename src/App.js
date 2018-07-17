import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import BlogRoll from './components/BlogRoll.js';

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-container-small">

        <div className="App-header padding">
          <img className="logo" src={logo} alt="logo" />
          <div className="uk-margin-large-top">
            <h2 className="title">Latest Blog Post</h2>
            <button uk-toggle="target: #add-post-modal" type="button" className="button uk-button uk-float-right">ADD POST</button>
          </div>
        </div>
        <BlogRoll></BlogRoll>

      </div>
    );
  }
}

export default App;
