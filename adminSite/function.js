let tracks = JSON.parse(localStorage.getItem("trackListStorage"));
let albums = JSON.parse(localStorage.getItem("albumListStorage"));
let artists = JSON.parse(localStorage.getItem("artistListStorage"));

function getArtistById(artistId) {
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id == artistId) {
            return artists[i].name;
        }
    }
}


function getArtistIdByArtistName(name) {
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].name == name) {
            return artists[i].id;
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


function getAlbumByAlbumName(name) {
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].name === name ) {
            return albums[i];
        }      
    }
}


function initNewAlbum() {
    return {
        "name": "",
        "artist": "",
        "id": "",
        "playlist": [],
        "cover": "",
        "genre": "",
    }
}


function initNewArtist() {
    return {
        "name": "",
        "id": "",
        "cover": "",
        "genre": "",
    }
}

function initNewSingle() {
    return {
        "name":"",
        "id":"",
        "album":"",
        "artist":"",
        "url":"",
        "cover":"",
        "genre":"",
    }
}


function addNoimageToAllImgTag() {
    $("img").attr("onError","this.onerror=null;this.src='../static/image/no-image.png';")
}
addNoimageToAllImgTag()