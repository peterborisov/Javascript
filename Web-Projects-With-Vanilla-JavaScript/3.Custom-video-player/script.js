const video = document.querySelector('#video');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

function updateProgress() {
  let minutes = Math.floor(video.currentTime / 60);
  let sec = Math.floor(video.currentTime % 60);
  
  minutes < 10 ? minutes = '0' + String(minutes) : '';
  sec < 10 ? sec = '0' + String(sec) : '';
  
  progress.value = (video.currentTime / video.duration) * 100;
  timestamp.innerHTML = `${minutes}:${sec}`;
}

let setVideoProgress = () => { video.currentTime = (+progress.value * video.duration) / 100; }

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);
