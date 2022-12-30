import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimedUpdate, 1000));

function onTimedUpdate(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

const getTimeSum = localStorage.getItem(STORAGE_KEY);
if (getTimeSum) {
  player.setCurrentTime(getTimeSum);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
