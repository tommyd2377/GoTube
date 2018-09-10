import React from 'react';

export default function NewsFeed(props) {

  return (
    props.likes.map(like => {
      return (
        <div>
          <br/>
            <div key={like.id} onClick={() => props.fetchOneVideo(like.vid)}>
              <p>{like.username}</p>
              Liked this video:
              <p>{like.title}</p>
            </div>
        </div>
      )
    })
  );
 
}