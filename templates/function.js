let song = new Audio();

function displayPlayBtn() {
    content = `<i class="fas fa-play-circle fa-2x" id="play-btn" onclick="playToPause()"></i>
                <audio id="audio">
                </audio>`;
    document.getElementsByClassName("play-button")[0].innerHTML = content;
}

displayPlayBtn()


function filterPopSingles(inputTracks) {
    let output = [];
    for (let i = 0; i < inputTracks.length; i++) {
        if (inputTracks[i].genre === "pop") {
            output.push(inputTracks[i]);
        }
    }
    return output;
}

// console.log(filterPopSingle(tracks))
function filterRockSingles(inputTracks) {
    let output = [];
    for (let i = 0; i < inputTracks.length; i++) {
        if (inputTracks[i].genre === "rock") {
            output.push(inputTracks[i]);
        }
    }
    return output;
}

function filterRapSingles(inputTracks) {
    let output = [];
    for (let i = 0; i < inputTracks.length; i++) {
        if (inputTracks[i].genre === "rap") {
            output.push(inputTracks[i]);
        }
    }
    return output;
}

function filterCountrySingles(inputTracks) {
    let output = [];
    for (let i = 0; i < inputTracks.length; i++) {
        if (inputTracks[i].genre === "country") {
            output.push(inputTracks[i]);
        }
    }
    return output;
}



function filterPopAlbums(inputAlbums) {
    let output = [];
    for (let i = 0; i < inputAlbums.length; i++) {
        if (inputAlbums[i].genre === "pop") {
            output.push(inputAlbums[i]);
        }
    }
    return output;
}

function filterRockAlbums(inputAlbums) {
    let output = [];
    for (let i = 0; i < inputAlbums.length; i++) {
        if (inputAlbums[i].genre === "rock") {
            output.push(inputAlbums[i]);
        }
    }
    return output;
}

function filterCountryAlbums(inputAlbums) {
    let output = [];
    for (let i = 0; i < inputAlbums.length; i++) {
        if (inputAlbums[i].genre === "country") {
            output.push(inputAlbums[i]);
        }
    }
    return output;
}

function filterRapAlbums(inputAlbums) {
    let output = [];
    for (let i = 0; i < inputAlbums.length; i++) {
        if (inputAlbums[i].genre === "rap") {
            output.push(inputAlbums[i]);
        }
    }
    return output;
}



function filterPopArtists(inputArtists) {
    let output = [];
    for (let i = 0; i < inputArtists.length; i++) {
        if (inputArtists[i].genre === "pop") {
            output.push(inputArtists[i]);
        }
    }
    return output;
}

function filterRockArtists(inputArtists) {
    let output = [];
    for (let i = 0; i < inputArtists.length; i++) {
        if (inputArtists[i].genre === "rock") {
            output.push(inputArtists[i]);
        }
    }
    return output;
}

function filterRapArtists(inputArtists) {
    let output = [];
    for (let i = 0; i < inputArtists.length; i++) {
        if (inputArtists[i].genre === "rap") {
            output.push(inputArtists[i]);
        }
    }
    return output;
}

function filterCountryArtists(inputArtists) {
    let output = [];
    for (let i = 0; i < inputArtists.length; i++) {
        if (inputArtists[i].genre === "country") {
            output.push(inputArtists[i]);
        }
    }
    return output;
}



function getArtistById(artistId) {
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id == artistId) {
            return artists[i].name;
        }
    }
}

function getTrackNameByTrackId(trackId) {
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === trackId) {
            return tracks[i].name;
        }
    }
}

function getTrackArtistByTrackId(trackId) {
    for (let i = 0; i < tracks.length; i++) {
        if (trackId === tracks[i].id) {
            return tracks[i].artist;
        }
    }
}

function getTrackCoverByTrackId(trackId) {
    for (let i = 0; i < tracks.length; i++) {
        if (trackId === tracks[i].id) {
            return tracks[i].cover;
        }
    }
}

function getImgByAlbumId(albumId, albums) {
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id == albumId) {
            return albums[i].cover;
        }
    }
}

function getTrackUrlByTrackId(trackId) {
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === trackId) {
            return tracks[i].url;
        }
    }
}


function getSingleByTrackId(trackId) {
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === trackId ) {
            return tracks[i];
        }      
    }
}

function getAlbumByAlbumId(albumId) {
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === albumId ) {
            return albums[i];
        }      
    }
}

function getAlbumListByArtistId(artistId) {
    output = [];
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].artist === artistId ) {
            output.push(albums[i]);
        }     
    }
    return output;
}


function getSingleListByArtistId(artistId) {
    output = [];
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].artist === artistId ) {
            output.push(tracks[i]);
        }     
    }
    return output;
}


function assignAudio(trackId) {

}

function playFirstTime(trackId) {
    document.getElementById("audio-sector").innerHTML = `
        <audio id="audio-${trackId}">
            <source src="${getTrackUrlByTrackId(trackId)}">
        </audio>
    `;
    document.getElementById("track-title-nav-bot").innerHTML = getTrackNameByTrackId(trackId, tracks);
    document.getElementById("track-artist-nav-bot").innerHTML = getArtistById(getTrackArtistByTrackId(trackId, tracks));
    document.getElementById("track-cover-nav-bot").innerHTML = `
        <img src="${getTrackCoverByTrackId(trackId)}" alt="">
    `;
    song.pause();
    song.currentTime = 0;
    song = new Audio();
    song = document.getElementById(`audio-${trackId}`);
    document.getElementById("play-btn").className = "fas fa-pause-circle fa-2x";
    document.getElementById("play-btn").removeAttribute("onclick");
    document.getElementById("play-btn").setAttribute("onclick", "pauseToPlay();");
    song.volume = document.getElementById("vol-control").value / 100;
    song.play();
    progessBar();
}

function playToPause() {
    document.getElementById("play-btn").className = "fas fa-pause-circle fa-2x";
    document.getElementById("play-btn").removeAttribute("onclick");
    document.getElementById("play-btn").setAttribute("onclick", "pauseToPlay();")
    song.play();
    progessBar();
}

function pauseToPlay() {
    document.getElementById("play-btn").className = "fas fa-play-circle fa-2x";
    document.getElementById("play-btn").removeAttribute("onclick");
    document.getElementById("play-btn").setAttribute("onclick", "playToPause();");
    song.pause();
    progessBar();
}


function progessBar() {
    song.addEventListener('timeupdate', function () {
        let per = (song.currentTime / song.duration);
        if (per != 1) {
            let style = `background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${per} , crimson), color-stop(${per} , #0A1A2A));border-radius : 20px;`;
            document.getElementById("track-control").removeAttribute("style");
            document.getElementById("track-control").setAttribute("style", style);
            document.getElementById("time-start").innerHTML = timeConvert(song.currentTime);
            document.getElementById("time-stop").innerHTML = timeConvert(song.duration);
        } else {
            let style = `background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(0 , crimson), color-stop(0 , #0A1A2A));border-radius : 20px;`;
            document.getElementById("track-control").removeAttribute("style");
            document.getElementById("track-control").setAttribute("style", style);
            document.getElementById("play-btn").className = "fas fa-play-circle fa-2x";
            document.getElementById("play-btn").setAttribute("onclick", "playToPause();")
            document.getElementById("time-start").innerHTML = `00:00`;
            document.getElementById("time-stop").innerHTML = timeConvert(song.duration);
        }
    });
}

$('#track-control').click(function (event) {
    time = ($(this).val() / 100) * song.duration;
    song.currentTime = time;
});





$('#vol-control').click(function (event) {
    vol = ($(this).val() / 100);
    song.volume = vol;
    if (vol != 0) {
        let style = `background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${vol} , crimson), color-stop(${vol} , #0A1A2A));border-radius : 20px;`;
        document.getElementById("vol-control").removeAttribute("style");
        document.getElementById("vol-control").setAttribute("style", style);
        document.getElementById("volume-icon").className = "fas fa-volume-up"

    } else {
        let style = `background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(0 , crimson), color-stop(0 , #0A1A2A));border-radius : 20px;`;
        document.getElementById("vol-control").removeAttribute("style");
        document.getElementById("vol-control").setAttribute("style", style);
        document.getElementById("volume-icon").className = "fas fa-volume-mute"
    }
});


function timeConvert(time) {
    time = Math.floor(time);
    let min = Math.floor(time / 60);
    let sec = time - (min * 60);
    let output = ``
    if ((min < 10) && (sec < 10)) {
        output = `0${min}:0${sec}`
    } else if ((min < 10) && (sec >= 10)) {
        output = `0${min}:${sec}`
    } else if ((min >= 10) && (sec < 10)) {
        output = `${min}:0${sec}`
    } else if ((min >= 10) && (sec >= 10)) {
        output = `${min}:${sec}`
    }
    return output
}

function reversedArr(inputArr) {
    let reversed = inputArr.slice().reverse();
    return reversed;
}


function stringProcess(input) {
    let str = input;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}


function searchProcess() {
    let search = document.getElementsByClassName("search-bar-input")[0].value;
    console.log(search)
    let albumsSearched = [];
    let artistsSearched = [];
    let singlesSearched = [];

    for (let i = albums.length-1; i >= 0; i--) {
        if (albums[i].name.toLowerCase().includes(stringProcess(search))) {
            albumsSearched.push(albums[i]);
        }
    }

    for (let i = artists.length-1; i >= 0; i--) {
        if (artists[i].name.toLowerCase().includes(stringProcess(search))) {
            artistsSearched.push(artists[i]);
        }
    }

    for (let i = tracks.length-1; i >= 0; i--) {
        if (tracks[i].name.toLowerCase().includes(stringProcess(search))) {
            singlesSearched.push(tracks[i]);
        }
    }
    displaySearchPage("Result",albumsSearched,artistsSearched,singlesSearched)
}
