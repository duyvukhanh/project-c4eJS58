var tracks = JSON.parse(localStorage.getItem("trackListStorage"));
var albums = JSON.parse(localStorage.getItem("albumListStorage"));
var artists = JSON.parse(localStorage.getItem("artistListStorage"));
var genreList = ["pop","rock","rap","country"]



function displayAdminIndex() {
    content = `
        <h1>Admin</h1>
        <br>

        <table class="table table-striped table-hover">
            
            <tbody class="">
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
}
displayAdminIndex()






