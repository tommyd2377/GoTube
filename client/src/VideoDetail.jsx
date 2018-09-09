import React from 'react';

export default function VideoDetail(props) {
  return (
    <div>
      <h1>{props.video.items[0].snippet.title}</h1>
    </div>
  )

}