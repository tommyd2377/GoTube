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
            video: {},
            likes: [],
            users: [],
            currentView: 'Login',
            isLoggedIn: null,
            query: '',
            email: '',
            fullname: '',
            username: '',
            password: '',
            id: ''
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
        this.like = this.like.bind(this);
    }

    fetchOneVideo(vid) {
        fetchVideo(vid)
        .then(video => {
          console.log(video)
            this.setState({
                video,
                currentView: 'Detail'
              });
        })
    }

    handleLoginChange(e) {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
  //you felt ready to stop last night
    logout() {
      localStorage.removeItem("jwt")
      this.setState({
       isLoggedIn: false,
       name:"",
       email:"",
       currentView: 'Login'
      })
    }

    isLoggedIn() {
      const res = !!(localStorage.getItem("jwt"));
      this.setState({
        isLoggedIn: res,
      })
      return res;
    }
  //you felt ready to stop last night
    register() {
      const url = `${BASE_URL}/users`
      const body = {"user": {"email": this.state.email, "password":this.state.password, "fullname":this.state.fullname, "username":this.state.username}}
      const init = { method: 'POST',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                     body:JSON.stringify(body)
                   }
      fetch(url, init)
      .then(res => 
        res.json()
    )
      .then(res => {
        console.log(res);
        this.setState({
          fullname: res.fullname,
          username: res.username,
          id: res.id
        })
        this.login();
      })
      .catch(err => err.message)
    }
   //you felt ready to stop last night
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
      .then(res => {
        localStorage.setItem("jwt", res.jwt);
        console.log(res)
      })
      .then(() => this.setState({
        isLoggedIn: true,
        currentView: 'NewsFeed'
      }))
      .catch(err => console.log(err))
    }
    //you felt ready to stop last night
    like() {
      const url = `${BASE_URL}/likes`;
      const body = {"like": {"uid": this.state.uid, "username": this.state.username, "vid": this.state.vid, "channel_title": this.state.channel_title, "title": this.state.title, "thumbnail": this.state.thumbnail, "description": this.state.description} }
      const init = { method: 'POST',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                     body:JSON.stringify(body),
                     }
      fetch(url, init)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .then(() => this.setState({
      }))
      .catch(err => console.log(err))
    }

    follow() {
      const url = `${BASE_URL}/follows`;
      const body = {"follow": {"follower_uid": this.state.follower_uid, "follower_username": this.state.follower_username, "followee_uid": this.state.followee_uid, "followee_username": this.state.followee_username} }
      const init = { method: 'POST',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                     body:JSON.stringify(body),
                     }
      fetch(url, init)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .then(() => this.setState({
      }))
      .catch(err => console.log(err))
    }

    goToNewsFeed() {
      const url = `${BASE_URL}/likes`;
      const init = { method: 'GET',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                    
                     }
      fetch(url, init)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          currentView: 'NewsFeed',
          likes: res
        })
      })
      .catch(err => console.log(err))
    }

    goToVideos() {
      this.setState({
        currentView: 'Search'
      })
    }

    goToUsers() {
      const url = `${BASE_URL}/users`;
      const init = { method: 'GET',
                     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                     mode: 'cors',
                    
                     }
      fetch(url, init)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          currentView: 'Users',
          users: res
        })
      })
      .catch(err => console.log(err))
    }

    goToProfile() {
      this.setState({
        currentView: 'Profile'
      })
    }

    handleChange(event) {
        this.setState({query: event.target.value});
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
        const { video, videos, users, likes } = this.state;
    
        switch (currentView) {
          case 'Detail':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <VideoDetail video={video} like={this.like} />
                  </div>
    
            break;

            case 'Login':
            return <div>
                    <Login handleLoginChange={this.handleLoginChange}
                        login={this.login}
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
                    <NewsFeed likes={likes} fetchOneVideo={this.fetchOneVideo} />
                  </div>
    
            break;

            case 'Users':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <Users users={users} />
                  </div>
    
            break;

            case 'Profile':
            return <div>
                    <NavBar goToNewsFeed={this.goToNewsFeed} goToVideos={this.goToVideos} goToUsers={this.goToUsers} goToProfile={this.goToProfile} />
                    <Profile logout={this.logout} />
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
    
    
