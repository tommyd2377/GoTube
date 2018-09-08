import React from 'react';

export default function Videos(props) {
  return (
    props.videos.map(video => {
      return (
        <div>
          <br/>
            <div key={video.id.videoId} onClick={() => props.fetchOneVideo(video.id.videoId)}>
              <p>{video.snippet.title}</p>
              <img src={video.snippet.thumbnails.high.url} />
            </div>
        </div>
      )
    })
  );
}