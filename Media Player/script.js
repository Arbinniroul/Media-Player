let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlID = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playpause() {
    if (ctrlID.classList.contains("fa-pause")) {
        song.pause();
        ctrlID.classList.remove("fa-pause");
        ctrlID.classList.add("fa-play");
    } else {
        song.play();
        ctrlID.classList.remove("fa-play");
        ctrlID.classList.add("fa-pause");
    }
}

// Update progress bar as the song plays
song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

// Allow user to change song position by moving the progress bar
progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});
