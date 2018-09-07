import React from 'react';
import Videos from './Videos';

export default class Search extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            query: ' '
        }

        this.handleChange = this.handleChange.bind(this);
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

     

      render() {
        return (
            <div>
                <form>
                    <label>
                        Search YouTube:
                        <input type="text" value={this.state.query} onChange={this.handleChange} />
                        <br/>
                    </label>
                </form>
                <Videos videos={this.state.videos} />
            </div>
          )
      }
    
  }