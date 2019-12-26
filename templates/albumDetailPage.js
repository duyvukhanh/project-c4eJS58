function displayAlbumDetailPage(inputAlbum) {
    content =`
        <div class="main-left">
        <div class="search-bar-sector d-flex align-items-center">
        <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

    </div>
            <div class="album-detail-page-cover">
                <img src="${inputAlbum.cover}" alt="">
            </div>
            <div class="album-detail-page-title">${inputAlbum.name}</div>
            <div class="album-detail-page-artist" onclick="displayArtistDetailPage(getArtistById('${inputAlbum.artist}'),getAlbumListByArtistId('${inputAlbum.artist}'),getSingleListByArtistId('${inputAlbum.artist}'))">
                by <span>${getArtistById(inputAlbum.artist)}</span>
            </div>
            <div class="album-detail-page-tracklist-title d-flex justify-content-center">Tracklist</div>
            <div class="album-detail-page-tracklist-sector">
                
            </div>
        </div>
        <div class="main-right"></div>
    `;
    document.getElementById("main").innerHTML = content
    displayAlbumDetailPagePlayList(inputAlbum.playlist)
    addNoimageToAllImgTag()

}

// displayAlbumDetailPage(albums[1],albums[1].playlist);

function displayAlbumDetailPagePlayList(inputTrackList) {
    content = ``;
    for (let i = 0; i < inputTrackList.length; i++) {
        let track = getSingleByTrackId(inputTrackList[i]);
        content += `
                <div class="album-detail-page-tracklist-row d-flex align-items-center">
                    <div class="album-detail-page-tracklist-cover d-flex align-items-center justify-content-center" onclick="playFirstTime('${track.id}')">
                        <img src="${track.cover}" alt="">
                    </div>
                    <div class="album-detail-page-tracklist-name d-flex align-items-center" onclick="playFirstTime('${track.id}')">
                        <span>${track.name}</span>
                    </div>
                </div>
        `;
    }
    document.getElementsByClassName("album-detail-page-tracklist-sector")[0].innerHTML = content;
    addNoimageToAllImgTag()
    
}