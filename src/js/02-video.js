
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerRef = document.querySelector('#vimeo-player');
const player = new Vimeo(playerRef);

setPlayerCurrentTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}

function setPlayerCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) player.setCurrentTime(currentTime);
}