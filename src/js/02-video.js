
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_DATA = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 500));
function onPlay(data) {
  const savedSeconds = JSON.stringify(data.seconds);
  localStorage.setItem(STORAGE_DATA, savedSeconds)
};
const savedTime = (localStorage.getItem(STORAGE_DATA))
 if(savedTime){player.setCurrentTime(savedTime)}
  

  
