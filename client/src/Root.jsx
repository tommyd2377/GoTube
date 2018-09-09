import React from 'react';
import Videos from './Videos';
import VideoDetail from './VideoDetail';
import NewsFeed from './NewsFeed';
import NavBar from './NavBar';
import Users from './Users';
import Profile from './Profile';
import Login from './Login'
import { fetchVideo } from './servcies/api';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default class Root extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            currentView: 'Login',
            isLoggedIn: null,
            isRegister: false,
            query: '',
            email: '',
            password: '',
            video: {}
        }
        this.fetchOneVideo = this.fetchOneVideo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.goToNewsFeed = this.goToNewsFeed.bind(this);
        this.goToVideos = this.goToVideos.bind(this);
        this.goToUsers = this.goToUsers.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.register = this.register.bind(this);
        this.showRegisterForm = this.showRegisterForm.bind(this);
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

    showRegisterForm() {
      this.setState({
        isRegister: true,
      })
    }

    handleLoginChange(e) {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
  
    logout() {
      localStorage.removeItem("jwt")
      this.setState({
       isLoggedIn: false,
       name:"",
       email:"",
      })
    }

    isLoggedIn() {
      const res = !!(localStorage.getItem("jwt"));
      this.setState({
        isLoggedIn: res,
      })
      return res;
    }
  
    register() {
      const url = `${BASE_URL}/users`
      const body = {"user": {"email": this.state.email, "password":this.state.password}}
      const init = { method: 'POST',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                     body:JSON.stringify(body)
                   }
      fetch(url, init)
      .then(res => res.json())
      .then(this.setState({
        isRegister: false,
      }))
      .catch(err => err.message)
    }
    
    login() {
      const url = `${BASE_URL}/user_token`;
      const body = {"auth": {"email": this.state.email, "password": this.state.password} }
      const init = { method: 'POST',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                     body:JSON.stringify(body),
                     }
      fetch(url, init)
      .then(res => res.json())
      .then(res => localStorage.setItem("jwt", res.jwt))
      .then(() => this.setState({
        isLoggedIn: true,
      }))
      .catch(err => console.log(err))
    }

    goToNewsFeed() {
      this.setState({
        currentView: 'NewsFeed'
      })
    }

    goToVideos() {
      this.setState({
        currentView: 'Search'
      })
    }

    goToUsers() {
      this.setState({
        currentView: 'Users'
      })
    }

    goToProfile() {
      this.setState({
        currentView: 'Profile'
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
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <VideoDetail video={video} />
                  </div>
    
            break;

            case 'Login':
            return <div>
                    <Login handleLoginChange={this.handleLoginChange}
                        login={this.login}
                        logout={this.logout}
                        email={this.state.email}
                        password={this.state.password}
                        isRegister={this.state.isRegister}
                        register={this.register}
                        />
                  </div>
    
            break;

            case 'NewsFeed':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <NewsFeed />
                  </div>
    
            break;

            case 'Users':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <Users />
                  </div>
    
            break;

            case 'Profile':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <Profile />
                  </div>
    
            break;
          case 'Search':
          return (
            <div>
              <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
              <br/>
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
          'NewsFeed',
          'Users',
          'Profile',
          'Login'
        ];
        return (
          <div>
            {this.determineWhichToRender()}
          </div>
        );
      }
    }
    
    
