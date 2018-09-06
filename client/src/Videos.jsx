import React from 'react';


export default function Videos(props) {
  return (

    props.videos.map(video => {
      return (
        <div>
          <br/>
        <form>
  <label>
    Search YouTube:
    <input type="text" name="name" />
    <br/>
  </label>
  <input type="submit" value="Search" />
</form>
        
        <div key={video.id.videoId}>


          <p>{video.snippet.title}</p>
          <img src={video.snippet.thumbnails.high.url} />
         

        </div>
        </div>
      )

    })

  );

}