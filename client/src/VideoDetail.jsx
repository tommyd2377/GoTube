import React from 'react';

export default function VideoDetail(props) {
  return (
    <div key={props.video.items[0].id}>
      <h1>{props.video.items[0].snippet.channelTitle}</h1>
      <h2>{props.video.items[0].snippet.title}</h2>
      <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${props.video.items[0].id}`}>
      </iframe>
      <br/>
      <button onClick={() => props.like()}>Like</button>
      <p>{props.video.items[0].snippet.description}</p>
    </div>
   
  )

}