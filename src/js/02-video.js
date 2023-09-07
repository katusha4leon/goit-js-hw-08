import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";
// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
// });
    
function time(obj) {
    const seconds = obj.seconds;
    console.log(seconds);
    localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
}

const videoTime = localStorage.getItem(TIME_KEY);
console.log(videoTime);

player.on("timeupdate", throttle(time, 1000));
player.setCurrentTime(videoTime);
