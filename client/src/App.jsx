import React, { Component } from 'react';
import Videos from './Videos'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  baseUrl = 'https://www.googleapis.com/youtube/v3/';
  apiKey = 'AIzaSyAGcWYpi2iRMuMI4dRyyrtz7vXwEc_qYwc';

  componentDidMount() {
    fetch(this.baseUrl + 'search?q=apple&part=snippet&maxResults=50&type=video&key=' + this.apiKey)
    .then(results => {
      return results.json();
    }).then(videos => {
      console.log(videos)
      this.setState({
        videos: videos.items
      })
    })
  }
  render() {
    return (
      <div className="App">
      <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
