import React from 'react';
import Videos from './Videos';
import VideoDetail from './VideoDetail';
import {
    fetchVideo
  } from './servcies/api';

export default class Root extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            currentView: 'Search',
            query: ' ',
            video: {}
        }
        this.fetchOneVideo = this.fetchOneVideo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetchOneVideo(vid) {
        fetchVideo(vid)
        .then(video => {
            this.setState({
                video,
                currentView: 'Detail'
              });
        })
    }

    handleChange(event) {
        this.setState({query: event.target.value});
        console.log(this.state.query)
        fetch(this.baseUrl + 'search?q=' + this.state.query + '&part=snippet&maxResults=50&type=video&key=' + this.apiKey)
        .then(results => {
          return results.json();
        }).then(videos => {
          console.log(videos)
          this.setState({
            videos: videos.items
          })
        })
        event.preventDefault();
      }

      baseUrl = 'https://www.googleapis.com/youtube/v3/';
      apiKey = 'AIzaSyAGcWYpi2iRMuMI4dRyyrtz7vXwEc_qYwc';  

      determineWhichToRender() {
        const { currentView } = this.state;
        const { video, videos } = this.state;
    
        switch (currentView) {
          case 'Detail':
            return <div>
              <VideoDetail video={video} />
            </div>
    
            break;
          case 'Search':
          return (
            <div>
                <form>
                    <label>
                        Search YouTube:
                        <input type="text" value={this.state.query} onChange={this.handleChange} />
                        <br/>
                    </label>
                </form>
                <Videos videos={videos} fetchOneVideo={this.fetchOneVideo} />
            </div>
          )
            break;
        }
    }

      render() {

        const links = [
          'Search',
          'Detail',
        ];
        return (
          <div>
            {this.determineWhichToRender()}
          </div>
        );
      }
    }
    
    
