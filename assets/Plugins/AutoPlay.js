function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    player.mute();
    player.toggle();
}

export default AutoPlay;
