import React from 'react';

export default function VideoDetail(props) {
    console.log(props.video)
  return (
    <div>
      <h1>{props.video.items[0].snippet.title}</h1>
    </div>
  )

}