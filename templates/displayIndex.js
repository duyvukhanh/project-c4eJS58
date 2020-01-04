function displayIndex() {
    let content =`
    <div class="main-left">
            <div class="search-bar-sector d-flex align-items-center">
                <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

            </div>
            <div id="carousel" class="carousel-sector d-flex justify-content-center">
                <!-- index.js -->
            </div>

            <div class="recommended-album-sector">
                <div class="recommended-album-sector-nav d-flex justify-content-between align-items-center">
                    <div class="recommended-album-title">
                        Recently Albums
                    </div>
                    <div class="genre-select-button" onclick="displayAlbumPage('',reversedArr(albums))">
                        More
                    </div>
                </div>
                <div class="recommended-album-sector-album d-flex justify-content-between align-items-center">
                    <div id="list-album-card" class="list-album-card d-flex justify-content-between align-items-center">
                       
                    </div>
                </div>
            </div>

            <div class="recommended-artist-sector">
                <div class="recommended-artist-sector-nav d-flex justify-content-between align-items-center">
                    <div class="recommended-artist-title">
                        Recommended Artists
                    </div>
                    <div class="more-artist-button" onclick="displayArtistPage('ALL',reversedArr(artists))">
                        More
                    </div>
                </div>
                <div class="recommended-artist-sector-album d-flex justify-content-between align-items-center">
                    <div id="list-artist-card"
                        class="list-artist-card d-flex justify-content-between align-items-center">
                        <!-- index.js function displayArtistCard -->
                    </div>
                </div>
            </div>


            <div class="home-page-hot-song">
                <div class="home-page-hot-song-title-box d-flex justify-content-center align-items-center">
                    <div class="home-page-hot-song-title d-flex align-items-center justify-content-center">
                        THE HOT TOP SINGLES CHART
                    </div>
                </div>

                <div class="home-page-hot-song-sector d-flex justify-content-center align-items-center">
                    <div class="home-page-hot-song-box">
                        <ul id="ul-top-song">
                            <!-- index.js -->

                        </ul>
                    </div>
                </div>
            </div>

            


        </div>
        <div class="main-right"></div>
    `;
    document.getElementById("main").innerHTML = content;
    displayBanner();
    // displayCarousel();
    displayAlbumCard(albums, artists)
    displayArtistCard(artists)
    displayTopSong(tracks, artists, albums)
    roundImage()
    addNoimageToAllImgTag()

}
displayIndex()




function displayAlbumCard(albums, artists) {
    let content = ``;
    for (let i = (albums.length - 1); i > (albums.length - 6); i--) {
        content += `<div class="album-card">
                        <div class="album-image-home-page" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${albums[i].id}'))">
                            <img src="${albums[i].cover}" alt="">
                        </div>
                        <div class="album-detail-home-page">
                            <div class="album-name-home-page" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${albums[i].id}'))">
                                <span>${albums[i].name}</span>
                            </div>
                            <div class="album-artist-home-page" onclick="displayArtistDetailPage(getArtistById('${albums[i].artist}'),getAlbumListByArtistId('${albums[i].artist}'),getSingleListByArtistId('${albums[i].artist}'))">
                                <span>${getArtistById(albums[i].artist,artists)}</span>
                            </div>
                        </div>
                    </div>`
    };
    document.getElementById("list-album-card").innerHTML = content;
}

function displayArtistCard(artists) {
    let content = ``;
    for (let i = 0; i < 7; i++) {
        content += `
            <div class="artist-card">
                <div class="artist-image-home-page d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${artists[i].id}'),getAlbumListByArtistId('${artists[i].id}'),getSingleListByArtistId('${artists[i].id}'))">
                    <img class="circle-img" src="${artists[i].cover}" alt="">
                </div>
                <div class="artist-detail-home-page d-flex justify-content-center align-items-center">
                    <div class="artist-name-home-page" onclick="displayArtistDetailPage(getArtistById('${artists[i].id}'),getAlbumListByArtistId('${artists[i].id}'),getSingleListByArtistId('${artists[i].id}'))">
                        <span>${artists[i].name}</span>
                    </div>              
                </div>
            </div>`;
    }
    document.getElementById("list-artist-card").innerHTML = content;
}

function displayCarousel() {
    let content = `<div class="carousel-sector-inside carousel-sector">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner carousel-sector">
            <div class="carousel-item slide-item-1 active">
                <img src="../static/image/carousel/BTS.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item slide-item-2">
                <img src="../static/image/carousel/jayz.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item slide-item-3">
                <img src="../static/image/carousel/maxresdefault.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
            data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
            data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>`;
    document.getElementById("carousel").innerHTML = content;
}

function displayBanner() {
    let content = `
    <img src="../static/image/carousel/jayz.jpg" alt="...">
    `;
    document.getElementById("carousel").innerHTML = content;
}

function displayTopSong(tracks, artists, albums) {
    let content = ``;
    for (let i = (tracks.length - 1); i > (tracks.length - 11); i--) {
        content += `
        <li class="d-flex align-items-center">
            <div class="hot-song-cover d-flex justify-content-center align-items-center">
                <img src="${getTrackCoverByTrackId(tracks[i].id)}" alt="">
            </div>
            
            <div class="hot-song-title-and-artist d-flex justify-content-between align-items-center">
                <div class="hot-song-title d-flex  align-items-center" onclick="playFirstTime('${tracks[i].id}')">${tracks[i].name}
                    
                </div>
                <div class="hot-song-artist d-flex  align-items-center justify-content-end" onclick="displayArtistDetailPage(getArtistById('${tracks[i].artist}'),getAlbumListByArtistId('${tracks[i].artist}'),getSingleListByArtistId('${tracks[i].artist}'))">
                    <span>${getArtistById(tracks[i].artist,artists)}</span>
                </div>
            </div>
        </li>
        `;
        document.getElementById("ul-top-song").innerHTML = content;
    }
}


// function audioAssignByTrackId(url,trackId) {
//     content = `<source src="${url}">`;
//     if (document.getElementById(trackId) !== null) {
//         document.getElementById(trackId).innerHTML = content; 
//     }
// }

// for (let i = 0; i < tracks.length; i++) {
//     audioAssignByTrackId(tracks[i].url,tracks[i].id); 
// }




