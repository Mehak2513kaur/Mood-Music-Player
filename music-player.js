let audioPlayer = document.getElementById('audioPlayer');

function playMusic() {
    audioPlayer.play();
}

function pauseMusic() {
    audioPlayer.pause();
}

function changeVolume(volumeControl) {
    audioPlayer.volume = volumeControl.value / 100;
}

function playSelectedSong(songUrl) {
    audioPlayer.src = songUrl;
    audioPlayer.play();
}
