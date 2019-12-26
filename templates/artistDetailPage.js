function displayArtistDetailPage(inputGenre, inputAlbums, inputSingles) {
    content = `
    <div class="main-left">
    <div class="search-bar-sector d-flex align-items-center">
    <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

</div>
            <div class="genre-page-title d-flex justify-content-center align-items-center">${inputGenre}
            </div>

            <div class="genre-page-single-sector">
                <div class="genre-page-single-sector-title d-flex justify-content-between">
                    <span class="genre-page-single">Singles</span>
                </div>
                <div id="genre-page-single-box" class="genre-page-single-list">
                    
                </div>
            </div>
            <div class="genre-page-album-sector">
                <div class="genre-page-album-sector-title d-flex justify-content-between">
                    <span class="genre-page-album">Albums</span>
                </div>
                <div id="genre-page-album-box" class="genre-page-album-list">
                    
                </div>
            </div>
        </div>
        <div class="main-right"></div>
    `;

    document.getElementById("main").innerHTML = content;
    assignAlbumRowArtistDetailPage(inputAlbums);
    assignSingleRowArtistDetailPage(inputSingles);
    assignArtistDetailSingleCard(reversedArr(inputSingles));
    assignArtistDetailAlbumCard(reversedArr(inputAlbums));
    roundImage()
    addNoimageToAllImgTag()

}
// displayArtistDetailPage(`Alo alo`,albums,tracks)

function assignAlbumRowArtistDetailPage(inputAlbums) {
    content = ``;
    let numberOfRowAlbum = Math.ceil(inputAlbums.length / 6);
    for (let i = 0; i < numberOfRowAlbum; i++) {
        content += `
        <div id="genre-page-album-row-${i}" class="genre-page-album-list-row d-flex"></div>
        `;
    }
    document.getElementById("genre-page-album-box").innerHTML = content;
}

function assignSingleRowArtistDetailPage(inputSingles) {
    content = ``;
    let numberOfRowSingle = Math.ceil(inputSingles.length / 6);
    for (let i = 0; i < numberOfRowSingle; i++) {
        content += `
        <div id="genre-page-single-row-${i}" class="genre-page-single-list-row d-flex"></div>
        `;
    }
    document.getElementById("genre-page-single-box").innerHTML = content;
    console.log(numberOfRowSingle)
}


function assignArtistDetailSingleCard(inputSingles) {
    let numberOfRow6Singles = Math.floor(inputSingles.length / 6);
    for (let i = 0; i < numberOfRow6Singles; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j < 6) {
                content += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                <img class="circle-img" src="${inputSingles[i*6+j-1].cover}" alt="">
                            </div>
                            

                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                    <span>${inputSingles[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start">
                                    <span>${getArtistById(inputSingles[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>
                `;
            } else {
                content += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                <img class="circle-img" src="${inputSingles[i*6+j-1].cover}" alt="">
                            </div>
                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                    <span>${inputSingles[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start">
                                    <span>${getArtistById(inputSingles[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                `;
            }
        }
        document.getElementById(`genre-page-single-row-${i}`).innerHTML = content;
    }
    let du = inputSingles.length - (numberOfRow6Singles * 6);
    if (du != 0) {
        let content1 = ``;
        for (let i = 0; i < du; i++) {
            content1 += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[numberOfRow6Singles*6+i].id}')">
                                <img class="circle-img" src="${inputSingles[numberOfRow6Singles*6+i].cover}" alt="">
                            </div>
                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[numberOfRow6Singles*6+i].id}')">
                                    <span>${inputSingles[numberOfRow6Singles*6+i].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start">
                                    <span>${getArtistById(inputSingles[numberOfRow6Singles*6+i].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>

                        
        `;
        }
        document.getElementById(`genre-page-single-row-${numberOfRow6Singles}`).innerHTML = content1;
    }
}



function assignArtistDetailAlbumCard(inputAlbums) {
    let numberOfRow6Albums = Math.floor(inputAlbums.length / 6);
    for (let i = 0; i < numberOfRow6Albums; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j < 6) {
                content += `
                        <div class="genre-page-album-card">
                            <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                                <img src="${inputAlbums[i*6+j-1].cover}" alt="">
                            </div>
                            <div class="genre-page-album-card-detail">
                                <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                                    <span>${inputAlbums[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage('alo alo',getAlbumListByArtistId('${inputAlbums[i*6+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*6+j-1].artist}'))">
                                    <span>${getArtistById(inputAlbums[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>
                `;
            } else {
                content += `
                <div class="genre-page-album-card">
                <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                    <img src="${inputAlbums[i*6+j-1].cover}" alt="">
                </div>
                <div class="genre-page-album-card-detail">
                    <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                        <span>${inputAlbums[i*6+j-1].name}</span>
                    </div>
                    <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage('alo alo',getAlbumListByArtistId('${inputAlbums[i*6+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*6+j-1].artist}'))">
                        <span>${getArtistById(inputAlbums[i*6+j-1].artist)}</span>
                    </div>
                </div>
            </div>
      
                `;
            }
        }
        document.getElementById(`genre-page-album-row-${i}`).innerHTML = content;
    }

    let du = inputAlbums.length - (numberOfRow6Albums * 6);
    if (du != 0) {
        let content1 = ``;
        for (let i = 0; i < du; i++) {
            content1 += `
                        <div class="genre-page-album-card">
                            <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow6Albums*6+i].id}'))">
                                <img src="${inputAlbums[numberOfRow6Albums*6+i].cover}" alt="">
                            </div>
                            <div class="genre-page-album-card-detail">
                                <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow6Albums*6+i].id}'))">
                                    <span>${inputAlbums[numberOfRow6Albums*6+i].name}</span>
                                </div>
                                <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage('alo alo',getAlbumListByArtistId('${inputAlbums[numberOfRow6Albums*6+i].artist}'),getSingleListByArtistId('${inputAlbums[numberOfRow6Albums*6+i].artist}'))">
                                    <span>${getArtistById(inputAlbums[numberOfRow6Albums*6+i].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>                       
        `;
        }
        document.getElementById(`genre-page-album-row-${numberOfRow6Albums}`).innerHTML = content1;
    }




}