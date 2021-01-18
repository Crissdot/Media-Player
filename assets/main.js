import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';
import AutoPause from './Plugins/AutoPause.ts';

const video = document.querySelector("video");
const playButton = document.querySelector(".playButton");
const muteButton = document.querySelector(".muteButton");

const mediaPlay = {
    el: video,
    plugins: [new AutoPlay(), new AutoPause()],
}

const player = new MediaPlayer(mediaPlay);
playButton.onclick = () => player.playToggle();
muteButton.onclick = () => player.muteToggle();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}
