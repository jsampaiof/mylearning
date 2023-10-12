import fetch from 'node-fetch';
const ID = 'V5N9dSndOUo';
const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${ID}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '73b1d484b8mshdeae30c0e79ec10p14a70ajsna6a08d8340e5',
    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
  }
};

async function videoInfo(){
    const response = await fetch(url, options);
    const json = await response.json();

    // console.log(json);
    return json.formats;
}

// videoInfo()

async function filter(){
  const video = await videoInfo();
  let videoFiltered = video.filter((quality) => {
    return quality.mimeType === 'video/mp4' || quality.qualityLabel > '144p';
  }).map((desc) => {
    return {URL:desc.url, Type: desc.mimeType, qualityLabel: desc.qualityLabel};
  })
  console.log(videoFiltered);
}

filter()
    
// function main(){
//     const req = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const response = fetch(url, options);
//             resolve();
//         }, 0);
//     })
// }

// function res(){
//     const result = response.json()
//     console.log(result);
// }

// main().then(res)