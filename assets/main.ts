import MediaPlayer from './MediaPlayer';
import AutoPlay from './Plugins/AutoPlay';
import AutoPause from './Plugins/AutoPause';
import Ads from './Plugins/Ads';

const video = document.querySelector("video");
const playButton: HTMLElement = document.querySelector(".playButton");
const muteButton: HTMLElement = document.querySelector(".muteButton");

const mediaPlay = {
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ],
}

const player = new MediaPlayer(mediaPlay);
playButton.onclick = () => player.playToggle();
muteButton.onclick = () => player.muteToggle();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}
