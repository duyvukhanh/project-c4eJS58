function displayArtistsAdmin() {
    content = `<h1>Artists</h1>
    </br>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addArtist">Add</button>
    
    </br>
    </br>
    <table class="table table-striped table-hover">
        <tbody class="">`;

    for (let i = 0; i < artists.length; i++) {
        content += `
        <tr>
            <td class="admin-page-index-col">
                ${i+1}
            </td>
            <td class="admin-page-image-col" style="width:17%;">
                <img src="${artists[i].cover}" alt="">
            </td>
            <td class="admin-page-detail-col" style="width:53%;">
                <div class="admin-page-name">
                    ${artists[i].name}
                </div>
                
                <div class="admin-page-genre">
                    ${artists[i].genre.toUpperCase()}.
                </div>
            </td>
            <td class="admin-page-function-col">
                <button type="button" class="btn btn-secondary" onclick="editArtist('${artists[i].id}')" data-toggle="modal" data-target="#editArtist">Edit</button>
                <button type="button" class="btn btn-secondary" onclick="deleteArtist('${artists[i].id}')">Delete</button>
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
    document.getElementById("nav-item-3").className = "nav-item active mx-2"
    document.getElementById("nav-item-4").className = "nav-item mx-2"
}



function deleteArtist(artistId) {
    if (confirm("Are you sure to delete?")) {
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].id === artistId) {
                artists.splice(i, 1);
                break;
            }
        }
        displayArtistsAdmin();
    }
}



function assignGenreToAddArtist() {
    let content = ``;
    for (let i = 0; i < genreList.length; i++) {
        content += `
        <option>${genreList[i].toUpperCase()}</option>
        `;
    }
    document.getElementById("inputArtistGenre").innerHTML = content;
}
assignGenreToAddArtist()

function addArtist(e) {
    e.preventDefault();
    let date = new Date().getTime();
    let inputArtistName = document.getElementById("inputArtistName").value;
    let inputArtistGenre = document.getElementById("inputArtistGenre").value;
    let inputArtistId = "artist" + date;
    let inputArtistCover = "../static/image/ArtistCover/" + inputArtistId;

    let newArtist = initNewArtist();
    newArtist.name = inputArtistName;
    newArtist.genre = inputArtistGenre;
    newArtist.id = inputArtistId;
    newArtist.cover = inputArtistCover;

    artists.push(newArtist);
    document.getElementById("form-add-artist").reset()

    displayArtistsAdmin();
    $('#addArtist').modal('hide')
}








function assignGenreToEditArtist(artistGenre) {
    let content = ``;
    for (let i = 0; i < genreList.length; i++) {
        if (genreList[i] === artistGenre) {
            content += `
            <option selected="selected"> ${genreList[i].toUpperCase()} </option>
            `;
        } else {
            content += `
            <option>${genreList[i].toUpperCase()}</option>
            `;
        }
    }
    document.getElementById("inputEditArtistGenre").innerHTML = content;
}


function editArtist(artistId) {
    let currentArtist
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id === artistId) {
            currentArtist = artists[i]
            break
        }
    }
    assignGenreToEditArtist(currentArtist.genre);
    document.getElementById("inputEditArtistId").value = currentArtist.id;
    document.getElementById("inputEditArtistName").value = currentArtist.name;
    document.getElementById("inputEditArtistCover").value = currentArtist.cover;
}


function confirmEditArtist(e) {
    e.preventDefault();
    let inputEditArtistId = document.getElementById("inputEditArtistId").value;
    
    let inputEditArtistName = document.getElementById("inputEditArtistName").value;
    
    let inputEditArtistGenre = document.getElementById("inputEditArtistGenre").value;

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].id === inputEditArtistId) {
            artists[i].name = inputEditArtistName;
            artists[i].genre = inputEditArtistGenre;
            break;
        }
    }
    $('#editArtist').modal('hide')
    displayArtistsAdmin();
    
}