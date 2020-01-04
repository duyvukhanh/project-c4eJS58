// var tracks = JSON.parse(localStorage.getItem("trackListStorage"));
// var albums = JSON.parse(localStorage.getItem("albumListStorage"));
// var artists = JSON.parse(localStorage.getItem("artistListStorage"));
// var genreList = ["pop","rock","rap","country"]

// let isTracksExistTest = localStorage.getItem("trackListStorageTest");
// if (!isTracksExistTest) {
//     localStorage.setItem("trackListStorageTest",JSON.stringify(tracks));
// } 

// let isAlbumsExistTest = localStorage.getItem("albumListStorageTest");
// if (!isAlbumsExistTest) {
//     localStorage.setItem("albumListStorageTest",JSON.stringify(albums));
// } 

// let isArtistsExistTest = localStorage.getItem("artistListStorageTest");
// if (!isArtistsExistTest) {
//     localStorage.setItem("artistListStorageTest",JSON.stringify(artists));
// } 

// let tracks = JSON.parse(localStorage.getItem("trackListStorage"));
// let albums = JSON.parse(localStorage.getItem("albumListStorage"));
// let artists = JSON.parse(localStorage.getItem("artistListStorage"));
let genreList = ["pop","rock","rap","country"]

// console.log(albums)



function displayAdminIndex() {
    let tracks = JSON.parse(localStorage.getItem("trackListStorage"));
    let albums = JSON.parse(localStorage.getItem("albumListStorage"));
    let artists = JSON.parse(localStorage.getItem("artistListStorage"));
    content = `
        <h1>Admin</h1>
        <br>

        <table class="table table-striped table-hover">
            
            <tbody class="table-bodyy">
                <tr class="table-dard" onclick="displayAlbumsAdmin()">
                    <td>Albums</td>
                </tr>
                <tr onclick="displayArtistsAdmin()">
                    <td>Artists</td>
                </tr>
                <tr class="table-dard" onclick="displaySinglesAdmin()">
                    <td>Singles</td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById("admin-page-main").innerHTML = content;
    document.getElementById("nav-item-1").className = "nav-item active mx-2"
    document.getElementById("nav-item-2").className = "nav-item mx-2"
    document.getElementById("nav-item-3").className = "nav-item mx-2"
    document.getElementById("nav-item-4").className = "nav-item mx-2"
    document.getElementById("albums-count").innerHTML = `${albums.length}`
    document.getElementById("singles-count").innerHTML = `${tracks.length}`
    document.getElementById("artists-count").innerHTML = `${artists.length}`

}
displayAdminIndex()






