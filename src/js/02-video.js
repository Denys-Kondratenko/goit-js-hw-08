import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(data);
  }, 1000)
);

const getLocalValue = localStorage.getItem('videoplayer-current-time');
try {
  const getObjectValue = JSON.parse(getLocalValue);
  console.log(getObjectValue.seconds);

  player.setCurrentTime(getObjectValue.seconds);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
