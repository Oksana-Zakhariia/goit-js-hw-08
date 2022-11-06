
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const data = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
}
    console.log(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', function (data) {
    console.log(" my function");
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );

});

