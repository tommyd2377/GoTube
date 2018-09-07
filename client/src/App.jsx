import React, { Component } from 'react';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }
  
  render() {
    return (
      <div className="App">
      <h1>GoTube</h1>
      <br/>
      <Search />
      </div>
    );
  }
}

export default App;
