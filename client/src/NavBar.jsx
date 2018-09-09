import React from 'react';

export default function NavBar(props) {
  return (

      
    <div class="topnav">
        <a onClick={() => props.goToNewsFeed()}>NewsFeed</a>
        <a onClick={() => props.goToVideos()}>Videos</a>
        <a onClick={() => props.goToUsers()}>Users</a>
        <a onClick={() => props.goToProfile()}>Profile</a>
    </div>
      
    
  );
}