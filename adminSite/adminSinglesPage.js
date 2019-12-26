function displaySinglesAdmin() {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    content = `<h1>Singles</h1>
    </br>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addSingle" onclick="onclickAddSingle()">Add</button>
    
    </br>
    </br>
    <table class="table table-striped table-hover">
        <tbody class="">`;

    for (let i = 0; i < tracks.length; i++) {
        content += `
        <tr>
            <td class="admin-page-index-col">
                ${i+1}
            </td>
            <td class="admin-page-image-col">
                <img src="${tracks[i].cover}" alt="">
            </td>
            <td class="admin-page-detail-col">
                <div class="admin-page-name">
                    ${tracks[i].name}
                </div>
                <div class="admin-page-artist">
                    ${getArtistById(tracks[i].artist)}
                </div>
                <div class="admin-page-genre">
                    ${tracks[i].genre.toUpperCase()}.
                </div>
            </td>
            <td class="admin-page-function-col">
                <button type="button" class="btn btn-secondary" onclick="editSingle('${tracks[i].id}')" data-toggle="modal" data-target="#editSingle">Edit</button>
                <button type="button" class="btn btn-secondary" onclick="deleteSingle('${tracks[i].id}')">Delete</button>
            </td>
        </tr>
        `;
    }
    content += `
    </tbody></table>
    `;
    document.getElementById("admin-page-main").innerHTML = content;
    document.getElementById("nav-item-1").className = "nav-item mx-2"
    document.getElementById("nav-item-2").className = "nav-item mx-2"
    document.getElementById("nav-item-3").className = "nav-item mx-2"
    document.getElementById("nav-item-4").className = "nav-item active mx-2"
    addNoimageToAllImgTag()

}


function deleteSingle(singleId) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    if (confirm("Are you sure to delete?")) {
        for (let i = 0; i < tracks.length; i++) {
            if (tracks[i].id === singleId) {
                tracks.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < albums.length; i++) {
            const album = albums[i];
            for (let j = 0; j < album.playlist.length; j++) {
                const song = album.playlist[j];
                if (song === singleId) {
                    album.playlist.splice(j, 1);
                }
            }
        }
        localStorage.setItem("trackListStorage", JSON.stringify(tracks));
        localStorage.setItem("albumListStorage", JSON.stringify(albums));
        displaySinglesAdmin();
    }
}


function assignAlbumToAddSingle() {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    let content = ``;
    for (let i = 0; i < albums.length; i++) {
        content += `
        <option>${albums[i].name}</option>
        `;
    }
    document.getElementById("inputSingleAlbum").innerHTML = content;
}

function onclickAddSingle() {
    assignAlbumToAddSingle()
}

function addSingle(e) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    e.preventDefault();
    let date = new Date().getTime();

    let inputSingleName = document.getElementById("inputSingleName").value;
    let inputSingleAlbum = document.getElementById("inputSingleAlbum").value;

    let inputSingleArtist = getAlbumByAlbumName(inputSingleAlbum).artist;
    let inputSingleGenre = getAlbumByAlbumName(inputSingleAlbum).genre;

    let inputSingleId = "song" + date;
    let inputSingleCover = "../static/image/TrackCover/" + inputSingleId + ".jpg";
    let inputSingleUrl = "../static/music/" + inputSingleId + ".mp3";

    let newSingle = initNewSingle();
    newSingle.name = inputSingleName;
    newSingle.artist = inputSingleArtist;
    newSingle.genre = inputSingleGenre.toLowerCase();
    newSingle.id = inputSingleId;
    newSingle.cover = inputSingleCover;
    newSingle.url = inputSingleUrl;
    newSingle.album = getAlbumByAlbumName(inputSingleAlbum).id;
    tracks.push(newSingle);


    localStorage.setItem("trackListStorage", JSON.stringify(tracks));
    localStorage.setItem("albumListStorage", JSON.stringify(albums));

    document.getElementById("form-add-single").reset()
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));

    for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        if (album.id === newSingle.album) {
            album.playlist.push(newSingle.id)
            console.log(album.name)
            console.log(album.playlist)

            break;
        }
    }
    localStorage.setItem("trackListStorage", JSON.stringify(tracks));
    localStorage.setItem("albumListStorage", JSON.stringify(albums));
    displaySinglesAdmin();
    $('#addSingle').modal('hide')
}





function assignGenreToEditSingle(SingleGenre) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    let content = ``;
    for (let i = 0; i < genreList.length; i++) {
        if (genreList[i].toUpperCase() === SingleGenre.toUpperCase()) {
            console.log(genreList[i])
            console.log(SingleGenre)
            content += `
            <option selected="selected"> ${genreList[i].toUpperCase()} </option>
            `;
        } else {
            console.log(genreList[i])
            console.log(SingleGenre)
            content += `
            <option>${genreList[i].toUpperCase()}</option>
            `;
        }
    }
    document.getElementById("inputEditSingleGenre").innerHTML = content;
}




function assignAlbumToEditSingle(SingleAlbum) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    let content = ``;
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === SingleAlbum) {
            content += `
            <option selected="selected"> ${albums[i].name} </option>
            `;
        } else {
            content += `
            <option>${albums[i].name}</option>
            `;
        }
    }
    document.getElementById("inputEditSingleAlbum").innerHTML = content;
}


function assignArtistToEditSingle(SingleArtist) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    let content = ``;
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id === SingleArtist) {
            content += `
            <option selected="selected"> ${artists[i].name} </option>
            `;
        } else {
            content += `
            <option>${artists[i].name}</option>
            `;
        }
    }
    document.getElementById("inputEditSingleArtist").innerHTML = content;
}

function editSingle(singleId) {
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));
    let currentSingle
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === singleId) {
            currentSingle = tracks[i]
            break
        }
    }
    assignArtistToEditSingle(currentSingle.artist)
    assignAlbumToEditSingle(currentSingle.album);
    assignGenreToEditSingle(currentSingle.genre);


    document.getElementById("inputEditSingleId").value = currentSingle.id;
    document.getElementById("inputEditSingleName").value = currentSingle.name;
    document.getElementById("inputEditSingleCover").value = currentSingle.cover;
    document.getElementById("inputEditSingleUrl").value = currentSingle.url;

    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === currentSingle.album) {
            const album = albums[i]
            for (let j = 0; j < album.playlist.length; j++) {
                const song = album.playlist[j];
                if (song === currentSingle.id) {
                    album.playlist.splice(j, 1);
                    break
                }
            }
        }

    }
    localStorage.setItem("trackListStorage", JSON.stringify(tracks));
    localStorage.setItem("albumListStorage", JSON.stringify(albums));
}


function confirmEditSingle(e) {

    e.preventDefault();
    tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    albums = JSON.parse(localStorage.getItem("albumListStorage"));
    artists = JSON.parse(localStorage.getItem("artistListStorage"));

    let inputEditSingleId = document.getElementById("inputEditSingleId").value;
    let inputEditSingleName = document.getElementById("inputEditSingleName").value;
    // let inputEditSingleArtist = document.getElementById("inputEditSingleArtist").value;
    // let inputEditSingleGenre = document.getElementById("inputEditSingleGenre").value;
    let inputEditSingleAlbum = document.getElementById("inputEditSingleAlbum").value;



    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === inputEditSingleId) {
            tracks[i].album = getAlbumByAlbumName(inputEditSingleAlbum).id;
            tracks[i].name = inputEditSingleName;
            tracks[i].artist = getAlbumByAlbumName(inputEditSingleAlbum).artist;
            tracks[i].genre = getAlbumByAlbumName(inputEditSingleAlbum).genre.toLowerCase();
            break;
        }
    }



    for (let i = 0; i < albums.length; i++) {
        if (getAlbumByAlbumName(inputEditSingleAlbum).id === albums[i].id) {
            albums[i].playlist.push(inputEditSingleId)
        }
    }
    localStorage.setItem("trackListStorage", JSON.stringify(tracks));
    localStorage.setItem("albumListStorage", JSON.stringify(albums));
    $('#editSingle').modal('hide')
    displaySinglesAdmin();
}