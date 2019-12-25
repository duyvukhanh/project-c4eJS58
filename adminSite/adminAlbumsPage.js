function displayAlbumsAdmin() {
    content = `<h1>Albums</h1>
    </br>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addAlbum">Add</button>
    
    </br>
    </br>
    <table class="table table-striped table-hover">
        <tbody class="">`;

    for (let i = 0; i < albums.length; i++) {
        content += `
        <tr>
            <td class="admin-page-index-col">
                ${i+1}
            </td>
            <td class="admin-page-image-col">
                <img src="${albums[i].cover}" alt="">
            </td>
            <td class="admin-page-detail-col">
                <div class="admin-page-name">
                    ${albums[i].name}
                </div>
                <div class="admin-page-artist">
                    ${getArtistById(albums[i].artist)}
                </div>
                <div class="admin-page-genre">
                    ${albums[i].genre.toUpperCase()}.
                </div>
            </td>
            <td class="admin-page-function-col">
                <button type="button" class="btn btn-secondary" onclick="editAlbum('${albums[i].id}')" data-toggle="modal" data-target="#editAlbum">Edit</button>
                <button type="button" class="btn btn-secondary" onclick="deleteAlbum('${albums[i].id}')">Delete</button>
            </td>
        </tr>
        `;
    }
    content += `
    </tbody></table>
    `;
    document.getElementById("admin-page-main").innerHTML = content;
}

function deleteAlbum(albumId) {
    if (confirm("Are you sure to delete?")) {
        for (let i = 0; i < albums.length; i++) {
            if (albums[i].id === albumId) {
                albums.splice(i, 1);
                break;
            }
        }
        displayAlbumsAdmin();
    }
}


function assignArtistToAddAlbum() {
    let content = ``;
    for (let i = 0; i < artists.length; i++) {
        content += `
        <option>${artists[i].name}</option>
        `;
    }
    document.getElementById("inputAlbumArtist").innerHTML = content;
}
assignArtistToAddAlbum()


function assignGenreToAddAlbum() {
    let content = ``;
    for (let i = 0; i < genreList.length; i++) {
        content += `
        <option>${genreList[i].toUpperCase()}</option>
        `;
    }
    document.getElementById("inputAlbumGenre").innerHTML = content;
}
assignGenreToAddAlbum()

function addAlbum(e) {
    e.preventDefault();
    let date = new Date().getTime();
    let inputAlbumName = document.getElementById("inputAlbumName").value;
    let inputAlbumArtist = document.getElementById("inputAlbumArtist").value;
    let inputAlbumGenre = document.getElementById("inputAlbumGenre").value;
    let inputAlbumId = "album" + date;
    let inputAlbumCover = "../static/image/AlbumCover/" + inputAlbumId;

    let newAlbum = initNewAlbum();
    newAlbum.name = inputAlbumName;
    newAlbum.artist = getArtistIdByArtistName(inputAlbumArtist);
    newAlbum.genre = inputAlbumGenre;
    newAlbum.id = inputAlbumId;
    newAlbum.cover = inputAlbumCover;

    albums.push(newAlbum);
    document.getElementById("form-add-album").reset()

    displayAlbumsAdmin();
    $('#addAlbum').modal('hide')
}





function assignArtistToEditAlbum(albumArtist) {
    let content = ``;
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id === albumArtist) {
            content += `
            <option selected="selected">${artists[i].name}</option>
            `;
        } else {
            content += `
            <option>${artists[i].name}</option>
            `;
        }
    }
    document.getElementById("inputEditAlbumArtist").innerHTML = content;
}



function assignGenreToEditAlbum(albumGenre) {
    let content = ``;
    for (let i = 0; i < genreList.length; i++) {
        if (genreList[i] === albumGenre) {
            console.log(albumGenre)
            console.log(genreList[i])


            content += `
            <option selected="selected"> ${genreList[i].toUpperCase()} </option>
            `;
        } else {
            content += `
            <option>${genreList[i].toUpperCase()}</option>
            `;
        }
    }
    document.getElementById("inputEditAlbumGenre").innerHTML = content;
}


function editAlbum(albumId) {
    let currentAlbum
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === albumId) {
            currentAlbum = albums[i]
            break
        }
    }
    assignArtistToEditAlbum(currentAlbum.artist);
    assignGenreToEditAlbum(currentAlbum.genre);
    document.getElementById("inputEditAlbumId").value = currentAlbum.id;
    document.getElementById("inputEditAlbumName").value = currentAlbum.name;
    document.getElementById("inputEditAlbumCover").value = currentAlbum.cover;
}


function confirmEditAlbum(e) {
    e.preventDefault();
    let inputEditAlbumId = document.getElementById("inputEditAlbumId").value;
    
    let inputEditAlbumName = document.getElementById("inputEditAlbumName").value;
    let inputEditAlbumArtist = document.getElementById("inputEditAlbumArtist").value;
    let inputEditAlbumGenre = document.getElementById("inputEditAlbumGenre").value;

    for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === inputEditAlbumId) {
            albums[i].name = inputEditAlbumName;
            albums[i].artist = getArtistIdByArtistName(inputEditAlbumArtist);
            albums[i].genre = inputEditAlbumGenre;
            console.log(albums[i].name)
            console.log(albums[i].artist)
            console.log(albums[i].genre)
            break;
        }
    }
    $('#editAlbum').modal('hide')
    displayAlbumsAdmin();
    
}