let baseUrl = 'https://www.googleapis.com/youtube/v3/videos?id=';
let apiKey = 'AIzaSyAGcWYpi2iRMuMI4dRyyrtz7vXwEc_qYwc';  

export function fetchVideo(vid) {
    return fetch(baseUrl + vid + '&part=snippet&key=' + apiKey)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
    });
}